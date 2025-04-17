import { Label } from '@/shared/ui/label'

type Props<T> = {
  name: keyof T
  label: string
  value?: T[keyof T]
  error?: string
  onChange?: (value: T[keyof T]) => void
  render: (props: { value?: T[keyof T]; onChange?: (value: T[keyof T]) => void; error?: string }) => React.ReactNode
}

export const FormField = <T extends Record<string, unknown>>({
  name,
  label,
  value,
  error,
  onChange,
  render,
}: Props<T>) => {
  const defaultOnChange = () => {
    console.warn(`onChange не предоставлен для поля ${String(name)}`)
  }
  return (
    <div className='space-y-2'>
      <Label htmlFor={String(name)}>{label}</Label>
      {render({ value, onChange: onChange || defaultOnChange, error })}
      <p className='text-red-600'>{error}</p>
    </div>
  )
}
