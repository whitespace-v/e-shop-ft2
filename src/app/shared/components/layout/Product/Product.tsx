'use client';
import React from 'react';
import Image from 'next/image';
import s from './Product.module.scss';
import { IProduct } from '@/app/shared/models/IProduct';
import Button from '../../UIKIT/Button';

export const Product: React.FC<IProduct> = (props: IProduct) => {
  return (
    <div className={s.Product}>
      <div className={s.Product__like}>{props.isLiked ? '❤️' : '🤍'}</div>
      <Image src={props.img} alt={props.title} width={160} height={160} className={s.Product__crad_image} />
      <h3 className={s.Product__title}>{props.title}</h3>
      <div className={s.Product__bottom}>
        <p className={s.Product__bottom_price}>${props.price}</p>
        <Button size="m" style="black_solid">
          Buy now
        </Button>
      </div>
    </div>
  );
};
