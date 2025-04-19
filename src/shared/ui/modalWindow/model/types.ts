import { ReactNode } from 'react'

export type ModalWindowContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  title: string
  description: string
}

export type ModalWindowProps = {
  children: ReactNode
  renderTrigger: (open: () => void) => ReactNode
  title: string
  description?: string
}

export type ModalWindowContentProps = {
  children: (close: () => void) => ReactNode
  className?: string
}
