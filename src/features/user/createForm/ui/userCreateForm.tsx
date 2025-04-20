import { CreateUserFormData } from '../model/schema'
import { createUserSchema } from '../model/schema'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Form } from '@/shared/lib/forms/ui/form'

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

  return (
    <Form onSubmit={onSubmit} schema={createUserSchema} defaultValues={{ email: '', name: '', password: '' }}>
      <Form.Field
        name='name'
        render={({ field }) => (
          <>
            <Form.Label>Имя</Form.Label>
            <Input {...field} placeholder='Введите имя' />
            <Form.Message />
          </>
        )}
      />

      <Form.Field
        name='email'
        render={({ field }) => (
          <>
            <Form.Label>Эл.почта</Form.Label> <Input {...field} placeholder='Введите email' />
            <Form.Message />
          </>
        )}
      />

      <Form.Field
        name='password'
        render={({ field }) => (
          <>
            <Form.Label>Пароль</Form.Label> <Input {...field} placeholder='Введите пароль' />
            <Form.Message />
          </>
        )}
      />

      <Form.Submit>
        {(isSubmitting) => (
          <Button type='submit' disabled={isSubmitting}>
            Отправить
          </Button>
        )}
      </Form.Submit>
    </Form>
  )
}
