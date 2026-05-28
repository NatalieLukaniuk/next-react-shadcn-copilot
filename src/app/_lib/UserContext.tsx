'use client';
import React, { useState } from "react";

export interface User {
  isAuthenticated: boolean;
  name: string;
  lastName: string;
}

const UserContext = React.createContext<User>({
  isAuthenticated: false,
  name: '',
  lastName: ''
});

const UserUpdateContext = React.createContext<(name: string, lastName: string) => void>(() => {});

export function useUserInfo() {
  const user = React.useContext(UserContext);
  return user;
}

export function useSetUserInfo() {
  const setUserInfo = React.useContext(UserUpdateContext);
  return setUserInfo;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    name: '',
    lastName: ''
  });

  function setUserInfo(name: string, lastName: string) {
    setUser({
      isAuthenticated: true,
      name: name,
      lastName: lastName
    });
  }

    return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUserInfo}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}