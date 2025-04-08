  const bottomMenu = document.createElement("nav");
  bottomMenu.className = "bottom-menu";
  ['Home', 'Trending', 'Favoritos', 'Ajustes'].forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = item;
    bottomMenu.appendChild(btn);
  });
  document.body.appendChild(bottomMenu);
    
  