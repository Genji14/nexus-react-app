import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: () => <SignUpPage/>,
})

const SignUpPage = () => {
  return <>
    This is Sign Up Page!!!
  </>
}