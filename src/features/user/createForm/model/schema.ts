import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(3, 'Имя пользователя должно быть больше 3 символов.'),
  email: z.string().email('Электронная почта должна соответствовать формату example@example.com'),
  password: z
    .string()
    .min(6, 'Пароль должен быть больше 6 символов.')
    .max(20, 'Пароль не должен превышать 20 символов.'),
})

export type CreateUserFormData = z.infer<typeof createUserSchema>
