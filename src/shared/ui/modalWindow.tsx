'use client'
import { createContext, ReactNode, useContext, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog'
import { cn } from '@/shared/lib/utils'

type ModalWindowContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  title: string
  description: string
}

type ModalWindowProps = {
  children: ReactNode
  renderTrigger: (open: () => void) => ReactNode
  title: string
  description?: string
}

type ModalWindowContentProps = {
  children: (close: () => void) => ReactNode
  className?: string
}

const ModalWindowContext = createContext<ModalWindowContextType | null>(null)

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

const ModalWindowContent = ({ children, className = '' }: ModalWindowContentProps) => {
  const { isOpen, close, title, description } = useModalWindow()

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className={cn('sm:max-w-[425px]', className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children(close)}
      </DialogContent>
    </Dialog>
  )
}

const useModalWindow = () => {
  const context = useContext(ModalWindowContext)
  if (!context) throw new Error('Используйте внутри ModalWindow.')
  return context
}

ModalWindow.Content = ModalWindowContent
