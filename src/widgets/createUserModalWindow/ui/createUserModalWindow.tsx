import { UserCreateForm } from '@/features/user/createForm/ui/userCreateForm'
import { Button } from '@/shared/ui/button'
import { ModalWindow } from '@/shared/ui/modalWindow'
import React from 'react'

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow title='Create user' renderTrigger={(open) => <Button onClick={open}>Open</Button>}>
      <ModalWindow.Content>{(close) => <UserCreateForm onSuccess={close} />}</ModalWindow.Content>
    </ModalWindow>
  )
}
