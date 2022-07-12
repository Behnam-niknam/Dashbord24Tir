import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import { FcGrid } from "react-icons/fc";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "داشبورد",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "ارسالی کاربر",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={FcGrid}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "بلاگ",
    layout: "/admin",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "غذا",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: " رژیم",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: " مالی",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "ورزش",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "پیغام",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },

  {
    name: "کاربران",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },

  {
    name: "پرسش و پاسخ",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "امکاناjjت",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
  {
    name: "تبلیغات",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={FcGrid} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },


];

export default routes;
