export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return data.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return api.json();
}

export async function getProductsProductByID(productId) {
  const papi = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  return papi.json();
}
