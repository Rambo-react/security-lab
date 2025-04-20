import { ReactNode } from 'react'
import { useFormContext } from '../hooks/useFormContext'

type FormStepProps = {
  step: number
  children: ReactNode
}

export const FormStep = ({ step, children }: FormStepProps) => {
  const { currentStep } = useFormContext()
  return currentStep === step ? <>{children}</> : null
}
