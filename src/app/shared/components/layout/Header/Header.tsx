'use client';
import s from './Header.module.scss';
import { Container } from '@/app/shared/components/Container/Container';
import { Logo } from '@/app/shared/icons/Logo';
import { WishList } from '@/app/shared/icons/WishList';
import { Cart } from '@/app/shared/icons/Cart';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Search } from '@/app/shared/icons/Search';
import { useSortStore } from '@/app/core/providers/sortProvider';
import { useDebounceCallback } from '@/app/shared/hooks/useDebounceCallback';

const Header = () => {
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false);
  const { queryAction, query } = useSortStore(state => state);

  const debounced = useDebounceCallback(queryAction, 500);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const queryHandler = (q: string) => {
    if (q.length > 3) debounced(q);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__content}>
          <Logo color="black" />
          <div className={s.search}>
            <div className={s.search__wrapper}>
              <Search className={cn(s.search__icon, isActiveInput && s.search__icon_active)} />
              <input
                onChange={e => queryHandler(e.currentTarget.value.trim())}
                onFocus={() => setIsActiveInput(true)}
                onBlur={() => setIsActiveInput(false)}
                type="text"
                className={s.search__input}
                placeholder={'Search'}
              />
            </div>
          </div>
          <div className={s.buttons}>
            <div className={s.buttons__item}>
              <button className={s.buttons__btn}>
                <WishList className={s.buttons__WishList} />
              </button>
            </div>
            <div className={s.buttons__item}>
              <button className={cn(s.buttons__btn, s.btn_cart)}>
                <Cart className={s.buttons__Cart} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
