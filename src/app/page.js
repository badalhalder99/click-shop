'use client';

import { Provider } from 'react-redux';
import store from '../store/store';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
import Footer from '@/components/Footer';
import CategorySlider from '@/components/CategorySlider';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-between h-[100vh]">
        <div>
          <Navbar />
        </div>
        <div>
          <ProductList />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
