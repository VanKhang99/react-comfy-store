export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let listUnique = data.map((item) => item[type]);
  if (type === "colors") {
    listUnique = listUnique.flat();
  }

  return ["all", ...new Set(listUnique)];
};
