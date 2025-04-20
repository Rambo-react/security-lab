import { useFormContext } from '../hooks/useFormContext'

type FormSubmitProps = {
  children: (isSubmitting: boolean) => React.ReactNode
}

export const FormSubmit = function FormSubmit({ children }: FormSubmitProps) {
  const { form } = useFormContext()
  const isSubmitting = form.formState?.isSubmitting ?? false

  return <>{children(isSubmitting)}</>
}
