async function loadCryptoList() {
    showLoader();
    const list = await getTopCryptos();
    const listContainer = document.getElementById('cryptoList');
    listContainer.innerHTML = '';
    list.forEach(crypto => {
      const item = renderCryptoListItem(crypto);
      listContainer.appendChild(item);
    });
    hideLoader();
  }
  