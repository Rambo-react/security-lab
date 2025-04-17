import { FormField } from '@/lib/forms/ui/FormField'
import { CreateUserFormData } from '../model/schema'
import { useUserForm } from '../model/model'

export const UserCreateForm = () => {
  const {
    form: { values, errors, setFieldValue },
    step,
    isSubmitting,
    nextStep,
    prevStep,
    onSubmit,
  } = useUserForm({
    stepCount: 3,
  })

  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <>
          <FormField<CreateUserFormData>
            name='email'
            label='Email'
            value={values.email}
            error={errors.email}
            onChange={(value) => setFieldValue('email', value)}
            render={({ value, onChange }) => (
              <input value={value as string} onChange={(e) => onChange(e.target.value)} />
            )}
          />
          <button onClick={nextStep}>Далее</button>
        </>
      )}
      {step === 2 && (
        <>
          <FormField<CreateUserFormData>
            name='name'
            label='Имя'
            value={values.email}
            error={errors.email}
            onChange={(value) => setFieldValue('name', value)}
            render={({ value, onChange }) => (
              <input value={value as string} onChange={(e) => onChange(e.target.value)} />
            )}
          />
          <button onClick={prevStep}>Назад</button>
          <button onClick={nextStep}>Далее</button>
        </>
      )}
      {step === 3 && (
        <>
          <FormField<CreateUserFormData>
            name='email'
            label='Email'
            value={values.email}
            error={errors.email}
            onChange={(value) => setFieldValue('email', value)}
            render={({ value, onChange }) => (
              <input value={value as string} onChange={(e) => onChange(e.target.value)} />
            )}
          />
          <button onClick={prevStep}>Назад</button>
          <button type='submit' disabled={isSubmitting}>
            Отправить
          </button>
        </>
      )}
    </form>
  )
}
