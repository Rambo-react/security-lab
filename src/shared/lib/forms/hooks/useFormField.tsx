import { useContext, useId } from 'react'
import { FieldContext } from '../model/context'
import { useFormContext } from './useFormContext'
import { normalizeError } from '../utils/normalizeError'
import { isFormFieldType } from '../utils/registerGuard'

export const useFormField = () => {
  const { form } = useFormContext()
  const fieldName = useContext(FieldContext)
  const id = useId()

  if (!fieldName) throw new Error('useFormField должен вызываться внутри Form.Field')

  const field = form?.register(fieldName)

  if (!isFormFieldType(field)) {
    throw new Error('Это тип не из RHF')
  }

  const error = normalizeError(form?.formState?.errors[fieldName])
  return {
    id,
    name: fieldName,
    error,
    formMessageId: `${id}-form-item-message`,
    field,
  }
}
