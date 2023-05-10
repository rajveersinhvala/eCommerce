const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // let exitingProduct = state.cart.find(
    //   (curItem) => curItem.id === id + color
    // );
    // console.log(exitingProduct);

    let exitingProduct = null;
    if (state.cart !== null) {
      exitingProduct = state.cart.find((curItem) => curItem.id === id + color);
    }

    if (exitingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount;

          if (newAmount >= curEle.max) {
            newAmount = curEle.max;
          }

          return {
            ...curEle,
            amount: newAmount,
          };
        } else {
          return curEle;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart:
          state.cart !== null ? [...state.cart, cartProduct] : [cartProduct],
      };
    }
  }

  if (action.type === "SET_INCREMENT") {
    let updateProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let incAmount = curEle.amount + 1;

        if (incAmount >= curEle.max) {
          incAmount = curEle.max;
        }

        return {
          ...curEle,
          amount: incAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updateData = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let decAmount = curEle.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curEle,
          amount: decAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updateData,
    };
  }

  // if (action.type === "UPDATE_CART") {
  //   let updateItemval = state.cart.reduce((intialval, curEle) => {
  //     let { amount } = curEle;
  //     intialval = intialval + amount;
  //     return intialval;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updateItemval,
  //   };
  // }
  if (action.type === "UPDATE_CART") {
    let updateItemval = 0;
    if (state.cart !== null) {
      updateItemval = state.cart.reduce((intialval, curEle) => {
        let { amount } = curEle;
        intialval = intialval + amount;
        return intialval;
      }, 0);
    }

    return {
      ...state,
      total_item: updateItemval,
    };
  }

  // if (action.type === "TOTAL_AMOUNT") {
  //   let total_price = state.cart.reduce((intialval, curEle) => {
  //     let { price, amount } = curEle;

  //     intialval = intialval + price * amount;

  //     return intialval;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  if (action.type === "TOTAL_AMOUNT") {
    let total_price = 0;
    if (state.cart !== null) {
      total_price = state.cart.reduce((intialval, curEle) => {
        let { price, amount } = curEle;
        intialval = intialval + price * amount;
        return intialval;
      }, 0);
    }

    return {
      ...state,
      total_price: total_price,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
