// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useMemo } from "react";
import { differenceInDays } from "date-fns";

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Near-native";

export interface User {
  id: string;
  email: string;
  level: Level;
  trialStart: string; // ISO string
  isPremium: boolean;
  isDeveloper: boolean;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  upgradeToPremium: () => void;
  applyDeveloperCode: (code: string) => boolean;
  isTrialActive: boolean;
  trialDaysLeft: number;
  isDeveloper: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TRIAL_DAYS = 5;
const DEV_SECRET_CODE = "DEV-FAMILY-2025"; // TODO: move to env/secure storage

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const isTrialActive = useMemo(() => {
    if (!user) return false;
    const daysSinceStart = differenceInDays(new Date(), new Date(user.trialStart));
    return daysSinceStart < TRIAL_DAYS;
  }, [user]);

  const trialDaysLeft = useMemo(() => {
    if (!user) return 0;
    const daysSinceStart = differenceInDays(new Date(), new Date(user.trialStart));
    return Math.max(TRIAL_DAYS - daysSinceStart, 0);
  }, [user]);

  const login = async (email: string, _password: string) => {
    // TODO: replace with real backend login
    setUser({
      id: "demo-user",
      email,
      level: "B1",
      trialStart: new Date().toISOString(),
      isPremium: false,
      isDeveloper: false,
    });
  };

  const signup = async (email: string, _password: string) => {
    // TODO: replace with real backend signup
    setUser({
      id: "new-user",
      email,
      level: "A2",
      trialStart: new Date().toISOString(),
      isPremium: false,
      isDeveloper: false,
    });
  };

  const logout = () => setUser(null);

  const upgradeToPremium = () => {
    if (!user) return;
    setUser({ ...user, isPremium: true });
  };

  const applyDeveloperCode = (code: string) => {
    if (!user) return false;
    if (code !== DEV_SECRET_CODE) return false;
    setUser({ ...user, isDeveloper: true, isPremium: true });
    return true;
  };

  const value: AuthContextValue = {
    user,
    login,
    signup,
    logout,
    upgradeToPremium,
    applyDeveloperCode,
    isTrialActive,
    trialDaysLeft,
    isDeveloper: !!user?.isDeveloper,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
