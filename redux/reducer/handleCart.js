import { ADD_TO_CART, DELETE_CART } from "../actionCreators";

const initialState = [];

const handleCart = (state = initialState, action) => {
    const product = action.payload;
    let exist, exist2;

    switch (action.type) {
        case ADD_TO_CART:
            // check if the product already exists
            exist = state.find(x => x.id === product.id);

            if(exist) {
                return state.map(x =>
                    x.id === product.id
                    ?
                    {
                        ...x,
                        quantity: x.quantity + 1
                    }
                    :
                    x
                )
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }
    
        case DELETE_CART:
            // check if the product already exists
            exist2 = state.find(x => x.id === product.id);
            
            if(exist2.quantity === 1) {
                return state.filter(x => x.id !== product.id)
            } else {
                return state.map(x =>
                    x.id === product.id
                    ?
                    {
                        ...x,
                        quantity: x.quantity - 1
                    }
                    :
                    x
                )
            }
            // break;

        default:
            return state;
            
    }
};

export default handleCart;