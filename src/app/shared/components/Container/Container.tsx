import React, { FC } from 'react'
import s from './Container.module.scss'
import { IContainerProps } from './Container.interface'

export const Container: FC<IContainerProps> = ({children}) => {
  return (
    <div className={s.container}>{children}</div>
  )
}
