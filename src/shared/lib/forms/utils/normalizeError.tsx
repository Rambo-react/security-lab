import { FieldError } from 'react-hook-form'

const isReactHookFormError = (error: unknown): error is FieldError => {
  return typeof error === 'object' && error !== null && 'message' in error
}

export const normalizeError = (error: unknown): string | undefined => {
  if (!error) return undefined
  if (typeof error === 'string') return error
  if (isReactHookFormError(error)) return error.message
  return 'Неизвестная ошибка'
}
