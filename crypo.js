document.getElementById('searchBtn').addEventListener('click', buscarCrypto);

async function buscarCrypto() {
  const input = document.getElementById('cryptoInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Buscando...';

  if (!input) {
    resultDiv.innerHTML = '<p style="color:red;">Por favor, ingresa el nombre de una criptomoneda.</p>';
    return;
  }

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${input}`);
    if (!response.ok) throw new Error('Criptomoneda no encontrada');

    const data = await response.json();

    const name = data.name;
    const symbol = data.symbol.toUpperCase();
    const image = data.image.large;
    const description = data.description.es || data.description.en || 'Descripción no disponible.';
    const homepage = data.links.homepage[0] || '#';
    const marketCap = data.market_data.market_cap.usd ? `$${data.market_data.market_cap.usd.toLocaleString()}` : 'No disponible';
    const twitter = data.links.twitter_screen_name ? `https://twitter.com/${data.links.twitter_screen_name}` : '#';

    resultDiv.innerHTML = `
      <h2>${name} (${symbol})</h2>
      <img src="${image}" alt="${name}" />
      <p>${description.substring(0, 300)}...</p>
      <p><strong>Capitalización de mercado:</strong> ${marketCap}</p>
      <p><strong>Sitio web:</strong> <a href="${homepage}" target="_blank">${homepage}</a></p>
      <p><strong>Twitter:</strong> <a href="${twitter}" target="_blank">${twitter}</a></p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
