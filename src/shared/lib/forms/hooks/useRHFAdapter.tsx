import { DefaultValues, FieldValues, useForm } from 'react-hook-form'

import { ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { RHFAdapter } from '../model/rhfTypes'

export const useRHFAdapter = <T extends FieldValues>(
  schema: ZodSchema<T>,
  defaultValues: DefaultValues<T>
): RHFAdapter<T> => {
  const { control, register, formState, handleSubmit, watch, setValue } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  })

  return {
    values: watch(),
    formState,
    setFieldValue: setValue,
    handleSubmit,
    control,
    register,
  }
}
