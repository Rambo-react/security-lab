import { useModalWindow } from '../hooks/useModalWindow'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { cn } from '@/shared/lib/utils'
import { ReactNode } from 'react'

export type ModalWindowContentProps = {
  children: (close: () => void) => ReactNode
  className?: string
}

export const ModalWindowContent = ({ children, className = '' }: ModalWindowContentProps) => {
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
