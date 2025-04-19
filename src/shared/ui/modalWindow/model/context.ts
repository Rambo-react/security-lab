'use client'
import { createContext } from 'react'
import { ModalWindowContextType } from './types'

export const ModalWindowContext = createContext<ModalWindowContextType | null>(null)
