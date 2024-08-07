'use client'

import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../store/productsSlice';
import { useState } from 'react';
import styles from './navbar.module.css'
import AddProduct from './AddProduct';
import { FaXmark } from "react-icons/fa6";
import CategorySlider from './CategorySlider';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImgUrl, setEditImgUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleEdit = (product) => {
    setIsEditing(product.id);
    setEditTitle(product.title);
    setEditDescription(product.description);
    setEditImgUrl(product.imgUrl);
  };

  const handleUpdate = (id) => {
    dispatch(updateProduct({ id, title: editTitle, description: editDescription, imgUrl: editImgUrl }));
    setIsEditing(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`container mx-auto my-0 ml-auto mr-auto md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px] ${styles.customContainer}`}>
      <div className='sliderWrap flex justify-between items-start mt-[60px] xl:flex-row 2xsmall:flex-col'>
        <div className='left xl:w-[18%] 2xsmall:w-[100%]'>
          <h2 className='2xsmall:text-[26px] xsmall:text-[28px] small:text-[32px] md:text-[36px] font-bold leading-[50px] small:mb-5 2xsmall:mb-3'>Shop by Category</h2>
        </div>
        <div className='right xl:w-[82%] 2xsmall:w-[100%]'>
          <CategorySlider sliderDatas={products} />
        </div>
      </div>
      <div className='productTop flex justify-between items-center mb-4 mt-8'>
        
        <div className='left'>
          <h2 className='small:text-2xl 2xsmall:text-[18px] font-semibold text-black'>Featured Products</h2>
        </div>
        <div className='right'>
          <button className='ml-auto inline-block 2xsmall:px-3 xsmall:px-5 rounded-full 2xsmall:py-[8px] small:py-[10px] text-sm font-semibold bg-[#24ccab] text-[#000000cf] hover:text-[#fff]' onClick={openModal}>Add Product</button>
        </div>
      </div>

      {/* modal start*/}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="modal-bg fixed inset-0 bg-[#1a2c47a8]"></div>
          <div className="modal-content bg-[#fff] rounded-2xl xsmall:w-[420px] 2xsmall:w-[95%] block mx-auto relative transition-opacity duration-150 linear">
            <div className="modal-header relative px-5 py-[14px]">
              <button className="absolute 2xsmall:top-[12px] xsmall:top-[12px] 2xsmall:right-1 xsmall:right-5 text-[10px] text-[#444746] hover:bg-[#c9cacb] hover:text-[#1f1f1f] bg-[#e6eefa] rounded-full border border-solid border-transparent cursor-pointer w-[35px] h-[35px] outline-0 p-[5px] flex justify-center items-center" onClick={closeModal}>
                <FaXmark />
              </button>
            </div>
            <h4 className='mb-[10px] mt-[-10px] ml-[21px]'>Add New Product</h4>
            <hr className={`${styles.hr}`} />
            <div className='modal-body px-[22px] py-2'>
              <AddProduct closeModal={closeModal}/>
            </div>
          </div>
        </div>
      )}
      {/* modal end*/}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xsmall:grid-cols-2 gap-4 mb-5">
        {products.map(product => (
          <div key={product.id} className={`${styles.shadowCustom} p-4 rounded-xl`}>
            {isEditing === product.id ? (
              <>
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="modal-bg fixed inset-0 bg-[#1a2c47a8]"></div>
                  <div className="modal-content bg-[#fff] rounded-2xl xsmall:w-[420px] 2xsmall:w-[95%] block mx-auto relative transition-opacity duration-150 linear">
                    <div className="modal-header relative px-5 py-[14px]">
                      <button className="absolute 2xsmall:top-[12px] xsmall:top-[12px] 2xsmall:right-1 xsmall:right-5 text-[10px] text-[#444746] hover:bg-[#c9cacb] hover:text-[#1f1f1f] bg-[#e6eefa] rounded-full border border-solid border-transparent cursor-pointer w-[35px] h-[35px] outline-0 p-[5px] flex justify-center items-center" onClick={() => setIsEditing(null)}>
                        <FaXmark />
                      </button>
                    </div>
                    <h4 className='mb-[10px] mt-[-10px] ml-[21px]'>Update Product</h4>
                    <hr className={`${styles.hr}`} />
                    <div className='modal-body px-[22px] py-2'>
                      <input 
                      type='text'
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)} 
                        className="block w-full p-2 mb-2 border rounded"
                        placeholder='Product title'
                      />

                      <input 
                        type='url'
                        value={editImgUrl} 
                        onChange={(e) => setEditImgUrl(e.target.value)}
                        className="block w-full p-2 mb-2 border rounded"
                        placeholder='Image Url'
                        required
                       />

                      <textarea 
                        type='text'
                        value={editDescription} 
                        onChange={(e) => setEditDescription(e.target.value)} 
                        placeholder="Write product description..." 
                        className="block w-full p-2 mb-2 border rounded"
                        rows="5" 
                        cols="20" 
                        required
                      />

                      <button onClick={() => handleUpdate(product.id)} className="mt-2 bg-green-500 text-white px-4 p-2 rounded-full mr-1">Update</button>
                      <button onClick={() => setIsEditing(null)} className="mt-2 bg-red-500 text-white p-2 px-4 rounded-full">Cancel</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img src={product.imgUrl} alt={product.title} className="small:w-[250px] small:h-[250px] 2xsmall:w-[250px] 2xsmall:h-[250px] xsmall:w-[200px] xsmall:h-[200px] block ml-auto mr-auto mb-4"/>
                <h4 className="text-lg font-medium">{product.title.slice(0,15)}</h4>
                <p className='text-base'>{product.description.slice(0, 45)}</p>

                <button onClick={() => handleEdit(product)} className="mt-2 bg-[#24ccab] text-white p-2 px-5 rounded-full text-[14px] mr-1">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="mt-2 bg-red-500 text-white p-2 px-5  rounded-full text-[14px]">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
