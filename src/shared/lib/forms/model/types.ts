import { RHFAdapter } from './rhfTypes'

export type FormContextType<T extends Record<string, unknown>> = {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  form: RHFAdapter<T>
}
