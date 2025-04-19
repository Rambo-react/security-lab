'use client'
import { useState } from 'react'
import { ModalWindowContext } from '../model/context'
import { ModalWindowContentProps, ModalWindowProps } from '../model/types'
import { useModalWindow } from '../hooks/useModalWindow'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { cn } from '@/shared/lib/utils'

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

ModalWindow.Content = ModalWindowContent
