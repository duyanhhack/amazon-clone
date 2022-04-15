export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {

    // console.log('Action: ', action)
    // console.log('Prev state: ', state)

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant't remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'REMOVE_ALL':
            let emptyBasket = []
            return {
                ...state,
                basket: emptyBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            throw new Error('Invalid action')
        // return state;
    }
}

export default reducer