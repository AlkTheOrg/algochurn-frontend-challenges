import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const InfiniteAutoPlaySlider: FC<Props> = ({
  children
}) => {
  return (
    <>
      {children}
    </>
  )
}
