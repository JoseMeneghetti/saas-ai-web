"use client";

import { getCurrentUser } from "@/lib/service/auth/auth-service";
import { IUser } from "@/types/global";
import { createContext, useCallback, useEffect, useState } from "react";



type AuthContextType = {
  isAuthenticated: boolean;
  user: IUser | null;
  setCountUser: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  const setCountUser = useCallback(() => {
    setUser((oldState) => {
      if (oldState) {
        return {
          ...oldState,
          count: oldState?.count + 1,
        };
      }
      return oldState;
    });
  }, []);

  useEffect(() => {
    getCurrentUser().then((reponse) => {
      setUser(reponse);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setCountUser }}>
      {children}
    </AuthContext.Provider>
  );
}
