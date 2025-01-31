import Header from './components/hoc/Header';
import Footer from './components/hoc/Footer';
import Hero from './components/home/Hero';
import Grid from './components/home/Grid';
import Preview from './components/home/Preview';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Grid />
      <Preview />
      <Footer />
    </div>
  );
}
