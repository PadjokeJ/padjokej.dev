import json

with open("socials.json", 'r') as f:
    socials = json.load(f)

def social(data):
    img = f"<img src=\"{data['icon']}\" class=\"favicon\">"
    p = f"<p style=\"margin:0;\">{data['name']}</p>"
    div = f"<div class=\"link_center\">{img}{p}</div>"
    return f"<a href={data['href']} class=\"social-link shadow border\" target=\"_blank\">{div}</a>"

sc = ""
for i in socials:
    sc += social(i)

index = ""
with open("src/index.html", 'r') as f:
  for line in f.readlines():
    index += line

index = index.format(socials= sc)

with open("src/index.html", 'w') as f:
  f.write(index)

