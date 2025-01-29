import Image from 'next/image';
import styles from './page.module.css';
import HomeCategories from './components/HomeCategories/HomeCategories';
import { Product } from './components/layout/Product/Product';

export default function Home() {
  return <div>
    <HomeCategories/>
    <Product/>
  </div>;
}
