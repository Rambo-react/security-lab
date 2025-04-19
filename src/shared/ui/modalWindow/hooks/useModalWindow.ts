'use client'
import { useContext } from 'react'
import { ModalWindowContext } from '../model/context'

export const useModalWindow = () => {
  const context = useContext(ModalWindowContext)
  if (!context) throw new Error('Используйте внутри ModalWindow.')
  return context
}
