import { Label } from '@/shared/ui/label'
import { ComponentProps } from 'react'
import { useFormField } from '../hooks/useFormField'
import { cn } from '../../utils'

type FormLabelProps = ComponentProps<typeof Label>

export const FormLabel = ({ className, ...props }: FormLabelProps) => {
  const { error, id } = useFormField()

  return <Label className={cn(error && 'text-destructive', className)} htmlFor={id} {...props} />
}
