const productCountInCart = (state) => (id) => {
  let count = 0

  if (!isEmptyObj(state.cartModel)) {
    if (state.cartModel[id]) {
      count = state.cartModel[id]
    }
  }

  return count
}

const func = state => id => {
  if (!isEmptyObj(state.cartModel) && state.cartModel[id]) {
    return state.cartModel[id]
  }
  return 0
}

const func2 = state => id => {
  return !isEmptyObj(state.cartModel) && state.cartModel[id]
    ? state.cartModel[id]
    : 0
}