export const formatPrice = (
  currency: "VND" | "USD",
  amount: number
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const discountPercent = (
  currentPrice: number,
  originPrice: number
): string => {
  return (
    "-" +
    parseFloat(
      (((originPrice - currentPrice) * 100) / originPrice).toFixed(0)
    ) +
    "%"
  );
};
