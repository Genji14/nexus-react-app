import { siteHeader } from "@/constants"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

interface MainNavProps {
    items?: NavItem[]
}

interface NavItem {
    title: string
    link?: string
    disabled?: boolean
    external?: boolean
}

export function MainNav({ items }: MainNavProps) {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link to="/" className="flex items-center space-x-2">
                {/* <Icons.logo className="h-6 w-6" /> */}
                <span className="inline-block font-bold">{siteHeader.name}</span>
            </Link>
            {
                items?.length ? (
                    <nav className="flex gap-6">
                        {items?.map((item, index) =>
                            item.link && (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className={cn(
                                        "flex items-center text-sm font-medium text-muted-foreground",
                                        item.disabled && "cursor-not-allowed opacity-80"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                        )}
                    </nav>
                ) : null
            }
        </div>
    )
}