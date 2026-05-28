'use client';
import { Button } from "@/components/ui/button";
import { useLogout, useSetUserInfo, useUserInfo } from "../_lib/UserContext";
import Link from "next/link";



export default function Login() {
    const updateUser = useSetUserInfo();
    const user = useUserInfo();
    const logout = useLogout();

    const buttonText = user.isAuthenticated ? `Welcome, ${user.name} ${user.lastName}` : "Login";
    return (
        <>
        <Button onClick={() => updateUser("John", "Doe")}>
            {buttonText}
        </Button>
            {user.isAuthenticated && <Button onClick={() => logout()}>Logout</Button>}
            {user.isAuthenticated && <Link href='/chat' className="mt-4 text-green-500">You are logged in as {user.name} {user.lastName}.</Link>}
        </>
        
    );
}