import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={cn("grid gap-10", className)} {...props}>
            <form onSubmit={() => { }}>
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Username
                        </Label>
                        <Input
                            id="email"
                            placeholder="Enter your username"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Password
                        </Label>
                        <Input type="password" placeholder="********" />
                    </div>
                    <button className={cn(buttonVariants())} disabled={isLoading}>
                        {/* {isLoading && ( */}
                        {/* <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> */}
                        {/* )} */}
                        Sign In
                    </button>
                </div>
            </form>

        </div>
    );
}