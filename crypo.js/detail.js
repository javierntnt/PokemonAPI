async function loadCryptoDetail(id) {
    showLoader();
    clearDetail();
    const data = await getCryptoDetail(id);
    renderCryptoDetail(data);
    hideLoader();
  }
  
  