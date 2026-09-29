const badges = {
  "neovim": {
    "link": "https://neovim.io",
    "img" : "/images/badges/neovim.gif"
  },
  "caddy": {
    "link": "https://caddyserver.com",
    "img": "/images/badges/caddy.png"
  },
  "agpl": {
    "link": "https://github.com/PadjokeJ/padjokej.dev/blob/main/LICENSE",
    "img" : "/images/badges/agpl.gif"
  },
  "arch": {
    "link": "https://archlinux.org",
    "img" : "/images/badges/arch.gif"
  }
}

const footerEl = document.createElement("footer");
footerEl.id = "main-footer";

const footerDiv = document.createElement("div");
footerDiv.id = "footer-bottom";

for (b in badges) {
  let img = document.createElement("img");
  let lnk = document.createElement("a");

  img.src = badges[b].img;
  lnk.classList.add("badge");
  lnk.classList.add("shadow");
  lnk.href = badges[b].link;
  lnk.appendChild(img);
  footerDiv.appendChild(lnk);
}

footerEl.appendChild(footerDiv);
document.body.appendChild(footerEl);

