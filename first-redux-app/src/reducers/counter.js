// reducer
const counterReducer = (state = 0, action) => { // stateの初期値 action戻り値を引数にとる
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }

export default counterReducer;