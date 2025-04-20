export type ModalWindowContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  title: string
  description: string
}
