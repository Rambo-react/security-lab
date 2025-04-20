import { ReactNode } from 'react'
import { FormFieldType } from '../model/rhfTypes'
import { FieldContext } from '../model/context'
import { useFormField } from '../hooks/useFormField'

type FieldControlProps = {
  name: string
  children: (props: {
    field: FormFieldType
    error?: string
    id: string
    formMessageId: string
    name: string
  }) => ReactNode
}

const FieldControl = ({ name, children }: FieldControlProps) => {
  return (
    <FieldContext.Provider value={name}>
      <FieldInner>{children}</FieldInner>
    </FieldContext.Provider>
  )
}

const FieldInner = ({ children }: { children: FieldControlProps['children'] }) => {
  const { field, error, id, formMessageId, name } = useFormField()

  return <div className='mb-2'>{children({ field, error, id, formMessageId, name })}</div>
}

type FormFieldProps<T extends Record<string, unknown>> = {
  name: keyof T | string
  render: ({ field }: { field: FormFieldType }) => React.ReactNode
}

export const FormField = <T extends Record<string, unknown>>({ name, render }: FormFieldProps<T>) => {
  return (
    <div className='space-y-2'>
      <FieldControl name={String(name)}>{({ field }) => render({ field })}</FieldControl>
    </div>
  )
}
