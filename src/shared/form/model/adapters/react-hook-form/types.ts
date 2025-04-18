import { UseFormReturn, FieldValues, UseFormRegister, Control } from 'react-hook-form'
import { BaseFormAdapter } from '../types'

export interface RHFAdapter<T extends FieldValues> extends BaseFormAdapter<T> {
  control: Control<T>
  register: UseFormRegister<T>
  setFieldValue: UseFormReturn<T>['setValue']
}
