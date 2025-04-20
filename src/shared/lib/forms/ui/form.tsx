import { ReactNode, useState } from 'react'
import { FormContext } from '../model/context'
import { z } from 'zod'
import { useRHFAdapter } from '../hooks/useRHFAdapter'

import { FormContextType } from '../model/types'
import { FormField } from './formField'
import { FormStep } from './formStep'
import { FormSubmit } from './formSubmit'
import { FormMessage } from './formMessage'
import { FormLabel } from './formLabel'

type FormProps<T extends z.ZodType> = {
  children: ReactNode
  schema: T
  defaultValues: z.infer<T>
  onSubmit: (data: z.infer<T>) => void
}

export const Form = <T extends z.ZodType>({ children, schema, defaultValues, onSubmit }: FormProps<T>) => {
  const form = useRHFAdapter(schema, defaultValues)

  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const contextValue: FormContextType<z.infer<T>> = {
    currentStep,
    nextStep,
    prevStep,
    form,
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  )
}

Form.Field = FormField
Form.Step = FormStep
Form.Submit = FormSubmit
Form.Message = FormMessage
Form.Label = FormLabel
