import { FormField } from '@/shared/form/ui/formField'
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
    form: { errors, register },
    isSubmitting,
    onSubmit,
  } = useCreateForm({
    schema: createUserSchema,
    onSubmit: handleSumbit,
    defaultValues: { email: '', name: '', password: '' },
  })

  return (
    <form onSubmit={onSubmit}>
      <FormField<CreateUserFormData>
        name='name'
        label='Имя'
        error={errors.name}
        render={() => <Input {...register('name')} placeholder='Введите имя' />}
      />

      <FormField<CreateUserFormData>
        name='email'
        label='Email'
        error={errors.email}
        render={() => <Input {...register('email')} placeholder='Введите email' />}
      />

      <FormField<CreateUserFormData>
        name='password'
        label='password'
        error={errors.password}
        render={() => <Input {...register('password')} placeholder='Введите пароль' />}
      />

      <Button type='submit' disabled={isSubmitting}>
        Отправить
      </Button>
    </form>
  )
}
