'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';

const AddProduct = ({closeModal}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ title, description, imgUrl }));
    setTitle('');
    setDescription('');
    setImgUrl('');
    closeModal()
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type='text'
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product title" 
        className="block w-full p-2 mb-2 border rounded"
        required
       />

      <input 
        type='url'
        value={imgUrl} 
        onChange={(e) => setImgUrl(e.target.value)} 
        placeholder="Image URL" 
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <textarea 
        type='text'
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Write product description..." 
        className="block w-full p-2 mb-2 border rounded"
        rows="5" 
        cols="20" 
        required
      />
      
      <button type="submit" className="bg-[#24ccab] text-white p-2 px-4 text-[14px] rounded-full">Add Product</button>
    </form>
  );
};

export default AddProduct;
