async function getTopCryptos(limit = 50) {
    const res = await fetch(`${API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`);
    return res.json();
  }
  
  async function getCryptoDetail(id) {
    const res = await fetch(`${API_BASE}/coins/${id}`);
    return res.json();
  }
  