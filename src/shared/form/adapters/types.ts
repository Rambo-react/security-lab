import { ZodType } from 'zod'

export interface BaseFormAdapter<T extends Record<string, unknown>> {
  values: T
  handleSubmit: (fn: (data: T) => void) => () => void
  errors: Record<keyof T, string | undefined>
}

export type FormSchema<T> = ZodType<T>
