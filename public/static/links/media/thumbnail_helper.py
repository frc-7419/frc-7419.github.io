import json
name = 'TeamBuilding2021'
links = []
with open(f'{name}.txt', 'r') as f:
    for i in f.read().splitlines():
        links.append(i.replace("/uc?id=", "/uc?id=").replace("&export=download", ""))

with open(f'{name}.json', 'w') as f:
    f.write(json.dumps({name:links}))


# what we have(raw link):       https://drive.google.com/uc?id=1x6TwSjp0d4yMGnUKmfSFKBxlGYsMr9aq&export=download
# what we want(link for embed): https://drive.google.com/thumbnail?id=1x6TwSjp0d4yMGnUKmfSFKBxlGYsMr9aq 


