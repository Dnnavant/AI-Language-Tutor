// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider, useAuth } from "./src/context/AuthContext";

import WelcomeScreen from "./src/screens/auth/WelcomeScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";
import DeveloperUnlockScreen from "./src/screens/auth/DeveloperUnlockScreen";

import HomeScreen from "./src/screens/app/HomeScreen";
import ConversationScreen from "./src/screens/app/ConversationScreen";
import LessonPlanScreen from "./src/screens/app/LessonPlanScreen";
import ProgressScreen from "./src/screens/app/ProgressScreen";
import SettingsScreen from "./src/screens/app/SettingsScreen";
import PaywallScreen from "./src/screens/app/PaywallScreen";

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  DeveloperUnlock: undefined;
};

export type AppTabParamList = {
  Home: undefined;
  Conversation: undefined;
  Lessons: undefined;
  Progress: undefined;
  Settings: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<AppTabParamList>();
const RootStack = createNativeStackNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Conversation" component={ConversationScreen} />
      <Tab.Screen name="Lessons" component={LessonPlanScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const { user, isTrialActive, isDeveloper } = useAuth();

  const isLoggedIn = !!user;
  const shouldShowPaywall =
    isLoggedIn && !isTrialActive && !user?.isPremium && !isDeveloper;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <RootStack.Screen name="Auth">
            {() => (
              <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
                <AuthStack.Screen name="Login" component={LoginScreen} />
                <AuthStack.Screen name="Signup" component={SignupScreen} />
                <AuthStack.Screen
                  name="DeveloperUnlock"
                  component={DeveloperUnlockScreen}
                />
              </AuthStack.Navigator>
            )}
          </RootStack.Screen>
        ) : shouldShowPaywall ? (
          <RootStack.Screen name="Paywall" component={PaywallScreen} />
        ) : (
          <RootStack.Screen name="AppTabs" component={AppTabs} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
