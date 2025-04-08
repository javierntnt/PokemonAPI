function clearDetail() {
    document.getElementById('cryptoDetail').innerHTML = '';
  }
  
  function renderCryptoListItem(crypto) {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${crypto.image}" width="20" /> ${crypto.name} (${crypto.symbol.toUpperCase()})`;
    li.addEventListener('click', () => loadCryptoDetail(crypto.id));
    return li;
  }
  
  function renderCryptoDetail(data) {
    const container = document.getElementById('cryptoDetail');
    container.innerHTML = `
      <h2>${data.name} (${data.symbol.toUpperCase()})</h2>
      <img src="${data.image.large}" width="100" />
      <p>${(data.description.es || data.description.en || 'Descripción no disponible').substring(0, 400)}...</p>
      <p><strong>Market Cap:</strong> $${data.market_data.market_cap.usd.toLocaleString()}</p>
      <p><strong>Web:</strong> <a href="${data.links.homepage[0]}" target="_blank">${data.links.homepage[0]}</a></p>
    `;
  }
  