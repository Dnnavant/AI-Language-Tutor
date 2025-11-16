// src/screens/auth/WelcomeScreen.tsx
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../App";

type Props = NativeStackScreenProps<AuthStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const tapCount = useRef(0);
  const lastTap = useRef<number | null>(null);

  const handleLogoTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 600) {
      tapCount.current += 1;
    } else {
      tapCount.current = 1;
    }
    lastTap.current = now;

    if (tapCount.current >= 5) {
      tapCount.current = 0;
      navigation.navigate("DeveloperUnlock");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoTap}>
        <Text style={styles.logo}>AI Language Tutor</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>
        Your personal speaking coach in your pocket.
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.primaryText}>Get started (5-day free trial)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.secondaryText}>I already have an account</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>Tap the logo 5x for developer access</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#050816",
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#cbd5f5",
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 999,
    marginBottom: 12,
  },
  primaryText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  secondaryButton: {
    borderColor: "#4b5563",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 999,
  },
  secondaryText: {
    color: "#e5e7eb",
    textAlign: "center",
  },
  hint: {
    marginTop: 32,
    textAlign: "center",
    fontSize: 12,
    color: "#6b7280",
  },
});

export default WelcomeScreen;
