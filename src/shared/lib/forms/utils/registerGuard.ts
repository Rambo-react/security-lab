import { UseFormRegisterReturn } from 'react-hook-form'

export function isFormFieldType(field: unknown): field is UseFormRegisterReturn {
  return (
    !!field &&
    typeof field === 'object' &&
    'name' in field &&
    'onChange' in field &&
    'onBlur' in field &&
    'ref' in field
  )
}
