import { UseFormReturn, FieldValues, UseFormRegister, Control, FormState } from 'react-hook-form'
import { BaseFormAdapter } from './types'

export type RHFAdapter<T extends FieldValues> = BaseFormAdapter<T> & {
  control: Control<T>
  register: UseFormRegister<T>
  setFieldValue: UseFormReturn<T>['setValue']
  formState: FormState<T>
}
