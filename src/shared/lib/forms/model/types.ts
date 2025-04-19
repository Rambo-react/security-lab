export type BaseFormAdapter<T extends Record<string, unknown>> = {
  values: T
  handleSubmit: (fn: (data: T) => void) => () => void
}
