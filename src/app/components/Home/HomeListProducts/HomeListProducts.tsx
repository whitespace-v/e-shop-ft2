'use client';
import React, { useEffect, useState } from 'react';
import s from './HomeListProducts.module.scss';
import { Container } from '@/app/shared/components/Container/Container';
import { AxiosInterceptor } from '@/app/core/http';
import { IProduct } from '@/app/shared/models/IProduct';
import { Product } from '@/app/shared/components/layout/Product/Product';

export const HomeListProduct = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await AxiosInterceptor.$get('/posts');
    console.log(data);
  };

  return (
    <Container>
      <div className={s.HomeListProduct}>
        {homeListProducts.map((i, idx) => (
          <div key={idx}>
            <Product title={i.title} id={i.id} img={i.img} price={i.price} isLiked={i.isLiked} />
          </div>
        ))}
      </div>
    </Container>
  );
};
