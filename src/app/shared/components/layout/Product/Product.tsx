'use client';
import React from 'react';
import Image from 'next/image';
import s from './Product.module.scss';
import { IProduct } from '@/app/shared/models/IProduct';
import Button from '../../UIKIT/Button';
import { useFavoriteStore } from '@/app/core/providers/favoriteProvider';

export const Product: React.FC<IProduct> = (props: IProduct) => {
  const { favorites, triggerFavorite} = useFavoriteStore(state => state);

  return (
    <div className={s.Product}>
      <div 
        className={s.Product__like} 
        onClick={() => void triggerFavorite(props.id)}
      >
        {favorites.includes(props.id) ? '❤️' : '🤍'}
      </div>
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