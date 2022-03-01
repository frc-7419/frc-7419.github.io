import json
name = 'SoftwareTesting'
links = []
with open(f'{name}.txt', 'r') as f:
    for line in f.readlines():
        links.append(line)

with open(f'{name}.json', 'w') as f:
    f.write(json.dumps({name:links}))