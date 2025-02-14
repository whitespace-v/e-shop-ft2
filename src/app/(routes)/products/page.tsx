'use client';
import React, { useEffect } from 'react';
import s from '@/app/components/Products/Products.module.scss';
import ProductsSort from '@/app/components/Products/ProductsSort/ProductsSort';
import { useSortStore } from '@/app/core/providers/sortProvider';

export interface ISortItem {
  id: number;
  title: string;
  count: number;
}

export default function Page() {
  const {
    brand,
    battery_capacity,
    screen_type,
    screen_diagonal,
    protection_class,
    built_in_memory,
    brandAction,
    batteryCapacityAction,
    screenTypeAction,
    screelDiagonalAction,
    protectionClassAction,
    builtInMemoryAction,
  } = useSortStore(state => state);

  const brandItems: ISortItem[] = [
    {
      id: 0,
      title: 'Apple',
      count: 110,
    },
    {
      id: 1,
      title: 'Samsung',
      count: 16,
    },
    {
      id: 2,
      title: 'Xiaomi',
      count: 6,
    },
  ];
  useEffect(() => {
    console.log(brand, battery_capacity, screen_type, screen_diagonal, protection_class, built_in_memory);
  }, [brand, battery_capacity, screen_type, screen_diagonal, protection_class, built_in_memory]);

  return (
    <div className={s.Products}>
      {/* sorting */}
      <div>
        <ProductsSort title="Brand" items={brandItems} activeItems={brand} handler={brandAction} />
        <ProductsSort
          title="Battery capacity"
          items={brandItems}
          activeItems={battery_capacity}
          handler={batteryCapacityAction}
        />
        <ProductsSort title="Screen type" items={brandItems} activeItems={screen_type} handler={screenTypeAction} />
        <ProductsSort
          title="Screen diagonal"
          items={brandItems}
          activeItems={screen_diagonal}
          handler={screelDiagonalAction}
        />
        <ProductsSort
          title="Protection class"
          items={brandItems}
          activeItems={protection_class}
          handler={protectionClassAction}
        />
        <ProductsSort
          title="Built-in memory"
          items={brandItems}
          activeItems={built_in_memory}
          handler={builtInMemoryAction}
        />
      </div>
      {/* content */}
      <div></div>
    </div>
  );
}
