import Footer from '@/app/components/hoc/Footer';
import Header from '@/app/components/hoc/Header';

export default function productDetails({params} : {params:any}) {
  return (
    <div>
      <Header />
      <p>{params.details}</p> 
      <Footer />
    </div>
  );
}
