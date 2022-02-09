#!/usr/bin/env python3
import sys
import requests
import mimetypes
import markdown
from markdown.treeprocessors import Treeprocessor
from markdown.extensions import Extension


def usage():
    print("\
        link_to_static.py [file.md]\
    ")

if len(sys.argv) < 2:
    usage()
    sys.exit()



# First create the treeprocessor

class ImgExtractor(Treeprocessor):
    def run(self, doc):
        "Find all images and append to markdown.images. "
        self.markdown.images = []
        self.markdown.alt_texts = []
        for image in doc.findall('.//img'):
            self.markdown.alt_texts.append(image.get('alt'))
            self.markdown.images.append(image.get('src'))

# Then tell markdown about it

class ImgExtExtension(Extension):
    def extendMarkdown(self, md, md_globals):
        img_ext = ImgExtractor(md)
        md.treeprocessors.add('imgext', img_ext, '>inline')

# Finally create an instance of the Markdown class with the new extension

converter = markdown.Markdown(extensions=[ImgExtExtension()])

for file in sys.argv[1:]: # skip argv[0]
    try:
        with open(file, 'r') as f:
            md = f.read()
            # returns html str
            converter.convert(md)

            urls = converter.images
            # theres no alt text just default to 0, 1 ...
            alt_texts = converter.alt_texts
            i = 0
            for url, alt_text in zip(urls, alt_texts):
                try:
                    r = requests.get(url)
                except requests.exceptions.RequestException as e:
                    print(f"Could not download file: {url}, skipping")
                    continue
                file_extension = mimetypes.guess_extension(r.headers.get('content-type', '').split(';')[0])
                prefix = '.' # TODO: CHANGE
                output = f"{prefix}/{i}{file_extension}"
                try:
                    with open(output, 'wb') as picwb:
                        picwb.write(r.content)
                    # this isn't great tbh
                    md = md.replace(f"![{alt_text}]({url})", f"![{alt_text}]({output})")

                except IOError:
                    print(f"Could not open file for writing: {output}, skipping")
                    continue


                i += 1
            f.write(md)

    except IOError:
        print(f"Could not open file {file}, skipping")
        continue

