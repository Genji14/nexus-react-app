import { UserAuthForm } from '@/components/modules/auth/sign-in'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft, Container } from 'lucide-react'

export const Route = createFileRoute('/sign-in')({
  component: () => <SignInPage />,
})

const SignInPage = () => {
  return <div className="container flex h-screen w-screen flex-col items-center justify-center">
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-4 top-4 md:left-8 md:top-8"
      )}
    >
      <>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </>
    </Link>
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <Container className="mx-auto h-10 w-10" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to NexusChain
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter username and password to sign in to your account
        </p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          to="/sign-up"
          className="hover:text-brand underline underline-offset-4"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  </div>
}