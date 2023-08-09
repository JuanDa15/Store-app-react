export function getTotalPrice(products) {
  return products.reduce((acc, item) => acc + item.total, 0);
}