import { useRHFAdapter } from '@/lib/forms/adapters/react-hook-form'
import { createUserSchema } from './schema'
import { useState } from 'react'

export const useUserForm = ({ stepCount = 1 }: { stepCount?: number }) => {
  const form = useRHFAdapter(createUserSchema)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true)
    try {
      console.log('Submitted:', data)
    } finally {
      setIsSubmitting(false)
    }
  })

  const nextStep = () => setStep((prev) => Math.min(prev + 1, stepCount))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return { form, step, setStep, nextStep, prevStep, isSubmitting, onSubmit }
}
