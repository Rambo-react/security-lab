import { FormField } from '@/shared/form/ui/form-field'
import { CreateUserFormData } from '../model/schema'
import { useCreateForm } from '@/shared/form/hooks/useCreateForm'
import { createUserSchema } from '../model/schema'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'

export const UserCreateForm = () => {
  const handleSumbit = (data: CreateUserFormData) => {
    console.log(data)
  }
  const {
    form: { values, errors, setFieldValue },
    step,
    isSubmitting,
    nextStep,
    prevStep,
    onSubmit,
  } = useCreateForm({
    stepCount: 3,
    schema: createUserSchema,
    onSubmit: handleSumbit,
    defaultValues: { email: '', name: '', password: '' },
  })

  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <>
          <FormField<CreateUserFormData>
            name='name'
            label='Имя'
            value={values.name}
            error={errors.name}
            onChange={(value) => setFieldValue('name', value)}
            render={({ value, onChange }) => (
              <Input
                id='name'
                placeholder='Введите имя'
                value={value as string}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />

          <Button onClick={nextStep}>Далее</Button>
        </>
      )}
      {step === 2 && (
        <>
          <FormField<CreateUserFormData>
            name='email'
            label='Email'
            value={values.email}
            error={errors.email}
            onChange={(value) => setFieldValue('email', value)}
            render={({ value, onChange }) => (
              <Input
                id='email'
                placeholder='Введите email'
                value={value as string}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          <Button onClick={prevStep}>Назад</Button>
          <Button onClick={nextStep}>Далее</Button>
        </>
      )}

      {step === 3 && (
        <>
          <FormField<CreateUserFormData>
            name='password'
            label='password'
            value={values.password}
            error={errors.password}
            onChange={(value) => setFieldValue('password', value)}
            render={({ value, onChange }) => (
              <Input
                id='password'
                placeholder='Введите пароль'
                value={value as string}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          <Button onClick={prevStep}>Назад</Button>
          <Button type='submit' disabled={isSubmitting}>
            Отправить
          </Button>
        </>
      )}
    </form>
  )
}
