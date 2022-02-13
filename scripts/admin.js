const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const extract = require('extract-zip')
const turndown = require('turndown')

let slug; // global

const turndownConverter = new turndown();
turndownConverter.addRule('imgsrc', {
    filter: ['img'],
    replacement: function (content, node) {
        let imgsrc = node.src.split('/');
        imgsrc = imgsrc[imgsrc.length - 1]
        return `![${node.alt}](/static/images/blog/${slug}/${imgsrc})`
    }
})

async function import_gdoc() {
    const BASEDIR = path.join(__dirname, '../');
    const zips = [];
    fs.readdirSync(BASEDIR).forEach((file) => {
        // if is file and ends in `.zip`
        if (fs.statSync(path.join(BASEDIR, file)).isFile() && file.split('.').pop() == 'zip') {
            zips.push(file);
        };
    })
    if (zips.length == 0) { console.error(`No zip files found in ${BASEDIR}, aborting`); return }
    let zip;
    if (zips.length == 1) { zip = zips[0] }
    else {
        ({zip} = await inquirer.prompt([
            {
                type: 'list',
                name: 'zip',
                message: 'Which document do you want to import?',
                choices: zips
            }
        ]))
    }
    ({title, slug, date, description} = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your blog post?',
        },
        {
            type: 'input',
            name: 'slug',
            message: 'What is the slug for your post? (7419.tech/blog/*slug*)'
        },
        {
            type: 'input',
            name: 'date',
            message: 'What is the date of the blog (YYYY-MM-DD, blank for today)',
            default: (new Date()).toISOString().split('T')[0]
        },
        {
            type: 'input',
            name: 'description', 
            message: 'What is the description for your post?'
        }
    ]))
    console.log(`Exracting ${zip} to ${BASEDIR}/temp`)
    const TMPDIR = path.join(BASEDIR, 'temp');
    // delete /temp if exists
    if (fs.existsSync(TMPDIR)) { fs.rmSync(TMPDIR, { recursive: true })}
    fs.mkdirSync(TMPDIR);
    // extract
    await extract(path.join(BASEDIR, zip), {
        dir: TMPDIR
    })
    // if /images in zip
    const TMPIMGDIR = path.join(TMPDIR, 'images')
    if (fs.existsSync(TMPIMGDIR)) {
        // create /public/static/images/blog/(slug)
        const IMGDIR = path.join(BASEDIR, `/public/static/images/blog/${slug}`)
        if (fs.existsSync(IMGDIR)) { console.error(`${IMGDIR} already exists, aborting`)}
        fs.mkdirSync(IMGDIR, { recursive: true })
        console.log(`Moving images to ${IMGDIR}`)
        // move images
        fs.renameSync(TMPIMGDIR, IMGDIR);
    }
    // convert .html and write to /posts/(slug).md
    let HTMLFILE;
    fs.readdirSync(TMPDIR).forEach((file) => {
        // if is file and ends in `.zip`
        if (fs.statSync(path.join(TMPDIR, file)).isFile() && file.split('.').pop() == 'html') {
            HTMLFILE = file;
        };
    })
    const html = fs.readFileSync(path.join(TMPDIR, HTMLFILE)).toString();
    let markdown = `\
---
title: "${title}"
date: "${date}"
description: "${description}"
---
`
    markdown += turndownConverter.turndown(html);
    fs.writeFileSync(path.join(BASEDIR, `posts/${slug}.md`), markdown)
}

const actions = {
    "Import Google Doc to blog": import_gdoc,
}

inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: Object.keys(actions),
    }
])
.then(({action}) => {
    actions[action]();
})
