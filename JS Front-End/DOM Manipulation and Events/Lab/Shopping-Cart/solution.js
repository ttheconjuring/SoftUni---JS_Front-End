function solve() {
  const addButtons = Array.from(document.querySelectorAll("button"));
  const output = document.getElementsByTagName("textarea")[0];

  const n = addButtons.length;

  addButtons[0].addEventListener("click", addAndprint);
  addButtons[1].addEventListener("click", addAndprint);
  addButtons[2].addEventListener("click", addAndprint);
  addButtons[3].addEventListener("click", calcAndPrint);

  const productPriceList = {
    Bread: 0.8,
    Milk: 1.09,
    Tomatoes: 0.99,
  };

  let orderedProducts = [];
  let totalPrice = 0;

  function addAndprint(e) {
    const target = e.currentTarget;
    const targetParent = target.parentNode.parentNode;
    const productTitle = targetParent.querySelector(
      ".product-details > .product-title"
    ).textContent;
    if (!orderedProducts.includes(productTitle)) {
      orderedProducts.push(productTitle);
    }
    totalPrice += productPriceList[productTitle];
    output.value += `Added ${productTitle} for ${productPriceList[
      productTitle
    ].toFixed(2)} to the cart.\n`;
  }

  function calcAndPrint(e) {
    output.value += `You bought ${orderedProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    for (const button of addButtons) {
      button.disabled = true;
    }
  }
}
