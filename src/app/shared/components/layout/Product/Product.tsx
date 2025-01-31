'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './Product.module.scss';
import { Container } from '@/app/shared/components/Container/Container';
import axios from 'axios';
import { AxiosInterceptor } from '@/app/core/http';

interface IProductProps {
  title: string;
  price: number;
  img: string;
  id: number;
  isLiked: boolean;
}

const products: IProductProps[] = [
  {
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: 900,
    img: '/iphone_14_pro_max_128gb_deep_purple.png',
    id: 1,
    isLiked: false,
  },

  {
    title: 'Blackmagic Pocket Cinema Camera 6k',
    price: 2535,
    img: '/camera.png',
    id: 2,
    isLiked: false,
  },

  {
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: 399,
    img: '/apple-watch.png',
    id: 3,
    isLiked: false,
  },

  {
    title: 'AirPods Max Silver',
    price: 549,
    img: '/apple-headphones.png',
    id: 4,
    isLiked: false,
  },

  {
    title: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 369,
    img: '/samsung-watch.png',
    id: 5,
    isLiked: false,
  },

  {
    title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    price: 1799,
    img: '/samsung_z_fold.png',
    id: 6,
    isLiked: false,
  },

  {
    title: 'Galaxy Buds FEGraphite',
    price: 99.99,
    img: '/samsung-headphones.png',
    id: 7,
    isLiked: false,
  },

  {
    title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    img: '/apple_ipad.png',
    id: 8,
    isLiked: false,
  },
];


export const Product = () => {  

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await AxiosInterceptor.$get('/posts')
    console.log(data);
  }

  return (  
    <Container>
      <div className={s.Product}>
        {products.map(i => (
          <div className={s.Product__card} key={i.id}>
            <div className={s.Product__card_like}>{i.isLiked ? '❤️' : '🤍'}</div>
            <Image src={i.img} alt={i.title} width={160} height={160} className={s.Product__crad_image} />
            <h3 className={s.Product__card_title}>{i.title}</h3>
            <p className={s.Product__card_price}>${i.price}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
