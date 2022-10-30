const addToCurrency=(name)=>{
    localStorage.setItem('currency', name);
}
const getToCurrency=()=>{
    let value
    if (typeof window !== 'undefined') {
        value = localStorage.getItem('currency');
    }
    return value;
}


const addToLanguage=(name)=>{
    localStorage.setItem('language', name);
}
const getToLanguage=()=>{
    let value
    if (typeof window !== 'undefined') {
        value = localStorage.getItem('language');
    }
    return value;
}





const addToDb = (id) => {
    let shoppingCart = {};

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;

}

export { addToDb, getStoredCart, addToCurrency, getToCurrency, addToLanguage, getToLanguage };