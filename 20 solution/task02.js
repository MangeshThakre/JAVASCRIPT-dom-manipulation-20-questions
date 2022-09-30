// task
// Fetch all the product name and store in an array

const row = document.querySelector(".as-imagegrid--7up .row").childNodes;

function getProduct() {
  const products = [];
  for (let e of row) {
    e.firstElementChild
      ? products.push(
          e.firstElementChild.getAttribute("data-analytics-link-component_name")
        )
      : null;
  }
  return products;
}

// Output
// ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']
