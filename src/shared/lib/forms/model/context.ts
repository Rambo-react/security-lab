'use client'
import { createContext } from 'react'
import { FormContextType } from './types'

export const FormContext = createContext<FormContextType<Record<string, unknown>> | null>(null)

export const FieldContext = createContext<string | null>(null)
