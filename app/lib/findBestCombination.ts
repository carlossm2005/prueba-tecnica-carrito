import { Product } from "../components/ProductList";

export function findBestCombination(products: Product[], budget: number): Product[] {
  const n = products.length;
  let bestCombo: Product[] = [];
  let maxTotal = 0;

  const backtrack = (start: number, currentCombo: Product[], currentTotal: number) => {
    if (currentTotal > budget) return;
    if (currentTotal > maxTotal) {
      maxTotal = currentTotal;
      bestCombo = [...currentCombo];
    }

    for (let i = start; i < n; i++) {
      currentCombo.push(products[i]);
      backtrack(i + 1, currentCombo, currentTotal + products[i].price);
      currentCombo.pop();
    }
  };

  backtrack(0, [], 0);

  return bestCombo;
}
