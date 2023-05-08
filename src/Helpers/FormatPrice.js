const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("EUR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price / 10000);
};

export default FormatPrice;
