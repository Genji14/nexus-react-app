import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { MainNav } from "./MainNav"
import { siteHeader } from "@/constants"

export const Header = () => {
  return <header className="bg-background sticky top-0 z-40 w-full border-b">
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <MainNav items={siteHeader.mainNav} />
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link to={siteHeader.buttons.signUp}>
            <Button variant={'ghost'}>Sign Up</Button>
          </Link>
          <Link to={siteHeader.buttons.signIn}>
            <Button>Sign In</Button>
          </Link>
        </nav>
      </div>
    </div>
  </header>
}

