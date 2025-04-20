import { HTMLAttributes, ReactNode } from 'react'
import { useFormField } from '../hooks/useFormField'
import { cn } from '../../utils'

type FormMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode
}

export const FormMessage = ({ className, children, ...props }: FormMessageProps) => {
  const { error, formMessageId } = useFormField()
  const body = error ?? children

  if (!body) {
    return null
  }

  return (
    <p id={formMessageId} className={cn('text-[0.8rem] font-medium text-destructive', className)} {...props}>
      {body}
    </p>
  )
}
