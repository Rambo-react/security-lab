import { DefaultValues, FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { RHFAdapter } from './types'
import { ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const mapErrors = <T extends FieldValues>(errors: FieldErrors<T>): Record<keyof T, string | undefined> =>
  Object.entries(errors).reduce(
    (acc, [key, value]) => {
      acc[key as keyof T] = value?.message as string
      return acc
    },
    {} as Record<keyof T, string | undefined>
  )

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
    errors: mapErrors(formState.errors),
    setFieldValue: setValue,
    handleSubmit,
    control,
    register,
  }
}
