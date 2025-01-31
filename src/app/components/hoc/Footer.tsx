import s from '../../styles/components/hoc/Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__info}>
          <img src="/Logo_Light.svg" alt="logo" />
          <p className={s.footer__text_italic}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className={s.footer__list}>
          <p className={s.footer__subtitle}>Services</p>
          <a href="" className={s.footer__text}>Bonus program</a>
          <a href="" className={s.footer__text}>Gift cards</a>
          <a href="" className={s.footer__text}>Credit and payment</a>
          <a href="" className={s.footer__text}>Service contracts</a>
          <a href="" className={s.footer__text}>Non-cash account</a>
          <a href="" className={s.footer__text}>Payment</a>
        </div>
        <div className={s.footer__list}>
          <p className={s.footer__subtitle}>Assistance to the buyer</p>
          <a href="" className={s.footer__text}>Find an order</a>
          <a href="" className={s.footer__text}>Terms of delivery</a>
          <a href="" className={s.footer__text}>Exchange and return of goods</a>
          <a href="" className={s.footer__text}>Guarantee</a>
          <a href="" className={s.footer__text}>Frequently asked questions</a>
          <a href="" className={s.footer__text}>Terms of use of the site</a>
        </div>
      </div>
      <div className={s.footer__icons}>
        <a href=""><img src="/Twitter.svg" alt="twitter" /></a>
        <a href=""><img src="/Facebook.svg" alt="facebook" /></a>
        <a href=""><img src="/Tiktok.svg" alt="tiktok" /></a>
        <a href=""><img src="/Instagram.svg" alt="instagram" /></a>
      </div>
    </div>
  );
};

export default Footer;
