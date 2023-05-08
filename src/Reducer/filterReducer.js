const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let pricearry = action.payload.map((curEle) => curEle.price);

      let maxPrice = Math.max(...pricearry);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gird_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gird_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          //khali name ne j add krse jo,1,2,3,4,5,6,7=>1,2,3,4,11,6,7ek j chnage kese baki asitis
          //name aetle filter ma input nu name kem k badha filter ne store krse ek ma
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.company === company.toLowerCase()
        );
      }

      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle) =>
          curEle.colors.includes(colors)
        );
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
