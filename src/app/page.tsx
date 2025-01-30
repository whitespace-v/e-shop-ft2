import Image from 'next/image';
import styles from './page.module.css';
import HomeCategories from './components/HomeCategories/HomeCategories';
import { Product } from './components/layout/Product/Product';
import { AxiosInterceptor } from './core/http';

export default function Home() {
  new AxiosInterceptor()

  return <div>
    <HomeCategories/>
    <Product/>
  </div>;
}
