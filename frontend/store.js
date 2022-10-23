import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from "next-redux-wrapper";
import { productsReducer, productDetailsReducer } from './reducers/productReducers'
// import { authReducer, allUsersReducer } from './reducers/userReducers'
const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    // newProduct: newProductReducer,
    // product: productReducer,
    // productReviews: productReviewsReducer,
    // review: reviewReducer,
    // auth: authReducer,
    // user: userReducer,
    // allUsers: allUsersReducer,
    // userDetails: userDetailsReducer,
    // forgotPassword: forgotPasswordReducer,
    // cart: cartReducer,
    // newOrder: newOrderReducer,
    // myOrders: myOrdersReducer,
    // allOrders: allOrdersReducer,
    // orderDetails: orderDetailsReducer,
    // order: orderReducer,
    // newReview: newReviewReducer
})

let initialState = {
    /* cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    } */
}

const middleware = [thunk];
// creating store
export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  // assigning store to next wrapper
  const makeStore = () => store;
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore);