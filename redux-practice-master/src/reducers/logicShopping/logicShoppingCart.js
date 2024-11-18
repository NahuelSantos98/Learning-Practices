export const addToCartLogic = (state, id)=>{
    const newItem = state.products.find(prod=> prod.id === id)
    const isInCart = state.cart.find(p => p.id === newItem.id)

    return isInCart?  
    {...state, cart: [...state.cart.map(i=> i.id === newItem.id ? {...i, quantity: i.quantity + 1}: i)]}  
    //Si i.id === newItem.id que el producto siga siendo el mismo pero que el i.quantity cambie y sea + 1. 
    //En el caso de que no sea igual el i.id, que devuelva el i entero
    : 
    {...state, cart: [...state.cart, {...newItem, quantity: 1}]}
    //Sino esta en el cart, que lo agregue, pero que deje el item desestructurado para agregarle el quantity
}

export const deleteOneFromCart = (state, id)=>{
    const itemToDelete = state.cart.find(i => i.id === id);

    if(itemToDelete.quantity <= 1){
        return {...state, cart: [...state.cart.filter(i=> i.id !== itemToDelete.id)]}
        //Me filtra por los que NO tienen el id igual
        //Osea, los diferentes a ese que no tiene cantidad menor o igual a uno
    }else{
        return {...state, cart: [...state.cart.map(i=> i.id === itemToDelete.id ? {...i, quantity: i.quantity - 1}: i)]}
    }
}


export const deleteAllFromCart = (state, id)=>{
    return {...state, cart: [...state.cart.filter( i=> i.id !== id)]}
}