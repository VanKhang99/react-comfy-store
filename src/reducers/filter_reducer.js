import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filteredProducts: [...action.payload],
      allProducts: [...action.payload],
      filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let productsSorted = [...filteredProducts];
    if (sort === "price-lowest") {
      productsSorted = productsSorted.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-highest") {
      productsSorted = productsSorted.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-az") {
      productsSorted = productsSorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "name-za") {
      productsSorted = productsSorted.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return { ...state, filteredProducts: productsSorted };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    // console.log("Filtered Products");
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...allProducts];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.includes(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category.toLowerCase()
      );
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company.toLowerCase()
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    // PRICE
    tempProducts = tempProducts.filter((product) => product.price <= price);

    // SHIPPING
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return {
      ...state,
      filteredProducts: tempProducts,
      allProducts: [...allProducts],
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        color: "all",
        company: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
