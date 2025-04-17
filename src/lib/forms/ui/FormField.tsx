type Props<T> = {
  name: keyof T
  label: string
  value: T[keyof T]
  error?: string
  onChange: (value: T[keyof T]) => void
  render: (props: { value: T[keyof T]; onChange: (value: T[keyof T]) => void; error?: string }) => React.ReactNode
}

export const FormField = <T extends Record<string, unknown>>({
  name,
  label,
  value,
  error,
  onChange,
  render,
}: Props<T>) => (
  <div className='space-y-2'>
    <label htmlFor={String(name)}>{label}</label>
    {render({ value, onChange, error })}
    <p className='text-red-600'>{error}</p>
  </div>
)
