import { FormField } from '@/shared/lib/forms/ui/formField'
import { CreateUserFormData } from '../model/schema'
import { useCreateForm } from '@/shared/lib/forms/hooks/useCreateForm'
import { createUserSchema } from '../model/schema'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { normalizeError } from '@/shared/lib/forms'

type Props = {
  onSuccess?: () => void
}

export const UserCreateForm = ({ onSuccess }: Props) => {
  const onSubmit = (data: CreateUserFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      onSuccess?.()
    }
  }

  const {
    form: {
      register,
      handleSubmit,
      formState: { isSubmitting, errors },
    },
  } = useCreateForm({
    schema: createUserSchema,
    defaultValues: { email: '', name: '', password: '' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField<CreateUserFormData>
        name='name'
        label='Имя'
        error={normalizeError(errors.name)}
        render={() => <Input {...register('name')} placeholder='Введите имя' />}
      />

      <FormField<CreateUserFormData>
        name='email'
        label='Email'
        error={normalizeError(errors.email)}
        render={() => <Input {...register('email')} placeholder='Введите email' />}
      />

      <FormField<CreateUserFormData>
        name='password'
        label='password'
        error={normalizeError(errors.password)}
        render={() => <Input {...register('password')} placeholder='Введите пароль' />}
      />

      <Button type='submit' disabled={isSubmitting}>
        Отправить
      </Button>
    </form>
  )
}
