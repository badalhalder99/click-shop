// src/redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Sunset Over the Mountains", description: "A beautiful sunset over the mountainous landscape.", imgUrl: "https://bonik-react.vercel.app/assets/images/Health%20Shop/Product%20(9).png" },
  { id: 2, title: "City Skyline", description: "A stunning view of the city skyline at night.", imgUrl: "https://bonik-react.vercel.app/assets/images/Health%20Shop/Product%20(4).png" },
  { id: 3, title: "Forest Path", description: "A serene path through a lush green forest.", imgUrl: "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera.png&w=1920&q=75" },
  { id: 4, title: "Beach Paradise", description: "A pristine beach with clear blue waters and white sand.", imgUrl: "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%201.png&w=1920&q=75" },
  { id: 5, title: "Snowy Mountain", description: "A majestic mountain covered in snow.", imgUrl: "https://i.ibb.co/mzyfKS4/unnamed-1-removebg-preview.png" },
  { id: 6, title: "Snowy Mountain", description: "A majestic mountain covered in snow.", imgUrl: "https://i.ibb.co/7RjYZwr/iphone-x-pictures-45229-1-removebg-preview.png" },
  { id: 7, title: "Snowy Mountain", description: "A majestic mountain covered in snow.", imgUrl: "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fclothes.png&w=1920&q=75" },
  { id: 8, title: "Snowy Mountain", description: "A majestic mountain covered in snow.", imgUrl: "https://i.ibb.co/mzyfKS4/unnamed-1-removebg-preview.png" },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.length + 1,
        ...action.payload
      };
      state.push(newProduct);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
