import { NavLink } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { ModeToggle } from '@/shared/ui/mode-toggle'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu'

const NavMenu = () => {
    return (
        <div className="flex w-full items-center justify-between px-6 py-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavLink to="/">
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>Home</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/about">
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>About</NavigationMenuLink>
                        </NavLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
        </div>
    )
}

export default NavMenu
