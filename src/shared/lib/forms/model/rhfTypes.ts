import { FieldValues, UseFormRegister, FormState, UseFormRegisterReturn } from 'react-hook-form'

export type RHFAdapter<T extends FieldValues> = {
  values: T
  register: UseFormRegister<T>
  formState: FormState<T>
  handleSubmit: (fn: (data: T) => void) => () => void
}

export type FormFieldType = UseFormRegisterReturn
