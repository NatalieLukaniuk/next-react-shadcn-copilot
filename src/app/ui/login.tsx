'use client';
import { Button } from "@/components/ui/button";
import { useSetUserInfo, useUserInfo } from "../_lib/UserContext";


export default function Login() {
    const updateUser = useSetUserInfo();
    const user = useUserInfo();

    const buttonText = user.isAuthenticated ? `Welcome, ${user.name} ${user.lastName}` : "Login";
    return (
        <Button onClick={() => updateUser("John", "Doe")}>
            {buttonText}
        </Button>
    );
}