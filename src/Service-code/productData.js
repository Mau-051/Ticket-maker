import mockProductData from "../mockData.json";

export function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProductData.Products);
    }, 500);
  });
}
