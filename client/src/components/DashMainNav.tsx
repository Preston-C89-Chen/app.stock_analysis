import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

export default function DashMainMenu() {
  return (
    <NavigationMenu className='menu-m'>
      <NavigationMenuList>
      <NavigationMenuItem>
        <Link to={"/dashboard/upload"}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Uploads
          </NavigationMenuLink>
        </Link>
        <Link to={"/dashboard/table"}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Table
          </NavigationMenuLink>
        </Link>
        <Link to={"/dashboard/bot"}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Trading Bot
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
