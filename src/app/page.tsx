import HomeCategories from './components/Home/HomeCategories/HomeCategories';
import { AxiosInterceptor } from './core/http';
import { Product } from './shared/components/layout/Product/Product';

export default function Home() {
  new AxiosInterceptor();

  return (
    <div>
      <HomeCategories />
      <Product />
    </div>
  );
}
