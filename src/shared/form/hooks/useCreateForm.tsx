import { useRHFAdapter } from '@/shared/form/model/adapters/react-hook-form'
import { useState } from 'react'
import { z } from 'zod'

type Props<T extends z.ZodType> = {
  stepCount?: number
  schema: T
  onSubmit?: (data: z.infer<T>) => Promise<void> | void
  defaultValues: z.infer<T>
}

export const useCreateForm = <T extends z.ZodType>({ stepCount = 1, schema, onSubmit, defaultValues }: Props<T>) => {
  const form = useRHFAdapter(schema, defaultValues)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true)
    try {
      await onSubmit?.(data)
    } finally {
      setIsSubmitting(false)
    }
  })

  const nextStep = () => {
    const hasErrors = Object.values(form.errors).some((error) => error !== undefined)

    if (hasErrors) {
      return
    }
    setStep((prev) => Math.min(prev + 1, stepCount))
  }

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return { form, step, setStep, nextStep, prevStep, isSubmitting, onSubmit: handleSubmit }
}
