'use client';
import React, { useState, createContext, useContext } from "react";

export interface User {
  isAuthenticated: boolean;
  name: string;
  lastName: string;
}

const UserContext = createContext<User>({
  isAuthenticated: false,
  name: '',
  lastName: ''
});

const UserUpdateContext = createContext<(name: string, lastName: string) => void>(() => {});

const UserLogoutContext = createContext<() => void>(() => {});

export function useUserInfo() {
  const user = useContext(UserContext);
  return user;
}

export function useSetUserInfo() {
  const setUserInfo = useContext(UserUpdateContext);
  return setUserInfo;
}

export function useLogout() {
  const logout = useContext(UserLogoutContext);
  return logout;
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

  function logout() {
    setUser({
      isAuthenticated: false,
      name: '',
      lastName: ''
    });
  }

    return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUserInfo}>
        <UserLogoutContext.Provider value={logout}>
          {children}
        </UserLogoutContext.Provider>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}