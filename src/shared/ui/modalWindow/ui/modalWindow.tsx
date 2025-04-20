'use client'
import { ReactNode, useState } from 'react'
import { ModalWindowContext } from '../model/context'

import { ModalWindowContent } from './modalWindowContent'

type ModalWindowProps = {
  children: ReactNode
  renderTrigger: (open: () => void) => ReactNode
  title: string
  description?: string
}

export const ModalWindow = ({ children, title, description = '', renderTrigger }: ModalWindowProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalWindowContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        title,
        description,
      }}
    >
      {renderTrigger(() => setIsOpen(true))}
      {children}
    </ModalWindowContext.Provider>
  )
}

ModalWindow.Content = ModalWindowContent
