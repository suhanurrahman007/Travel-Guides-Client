"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { protectedRoutes } from "@/src/constant";
import { UserProps } from "./navbar";
import { signOut } from "next-auth/react";

export default function NavbarDropdown({ session }: { session : UserProps | null}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        {session?.user ? (
          <DropdownItem
            onClick={() => signOut()}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        ) : (
          <DropdownItem
            onClick={() => handleLogout()}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
