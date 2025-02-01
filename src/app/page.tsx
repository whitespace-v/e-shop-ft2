import HomeCategories from './components/Home/HomeCategories/HomeCategories';
import { HomeListProduct } from './components/Home/HomeListProducts/HomeListProducts';
import { AxiosInterceptor } from './core/http';

export default function Home() {
  new AxiosInterceptor();

  return (
    <div>
      <HomeCategories />
      <HomeListProduct />
    </div>
  );
}
