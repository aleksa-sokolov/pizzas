import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

// const fetchPizzas = createAsyncThunk(
//     "pizza/fetchPizzasStatus",
//     async () => {
//         let response = await fetch(`https://633d60367e19b178290d1687.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=desc${search}`);
//         return response.json();
//     }
// )

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    }
})

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;
