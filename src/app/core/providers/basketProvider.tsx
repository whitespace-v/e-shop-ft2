'use client'
import { createContext, ReactNode, useContext, useRef } from "react"
import { BasketStore, createBasketStore, initBasketStore } from "../store/basketStore"
import { useStore } from "zustand"

export type BasketStoreApi = ReturnType<typeof createBasketStore>

export const BasketStoreContext = createContext<BasketStoreApi | undefined>(undefined)

export interface BasketStoreProviderProps {
    children: ReactNode;
}
export const BasketStoreProvider = ({children}: BasketStoreProviderProps) => {
    const storeRef = useRef<BasketStoreApi>(undefined)
    if (!storeRef.current){
        storeRef.current = createBasketStore(initBasketStore())
    }
    return <BasketStoreContext.Provider value={storeRef.current}> {children} </BasketStoreContext.Provider>
}

export const useBasketStore = <T,>(selector: (store: BasketStore) => T): T => {
    const basketStoreContext = useContext(BasketStoreContext);

    if (!basketStoreContext) {
      throw new Error(`useBasketStore must be used within BasketStoreProvider`);
    }
    return useStore(basketStoreContext, selector);
  };