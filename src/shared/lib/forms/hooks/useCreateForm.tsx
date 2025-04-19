import { useState } from 'react'
import { z } from 'zod'
import { useRHFAdapter } from './useRHFAdapter'

type Props<T extends z.ZodType> = {
  stepCount?: number
  schema: T
  defaultValues: z.infer<T>
}

export const useCreateForm = <T extends z.ZodType>({ stepCount = 1, schema, defaultValues }: Props<T>) => {
  const form = useRHFAdapter(schema, defaultValues)
  const [step, setStep] = useState(1)

  const nextStep = () => {
    const hasErrors = Object.values(form.formState.errors).some((error) => error !== undefined)

    if (hasErrors) {
      return
    }
    setStep((prev) => Math.min(prev + 1, stepCount))
  }

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return {
    form,
    step,
    setStep,
    nextStep,
    prevStep,
  }
}
