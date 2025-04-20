'use client'
import { useContext } from 'react'
import { FormContext } from '../model/context'

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) throw new Error('Используйте внутри Form.')
  return context
}
