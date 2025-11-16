// src/screens/app/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const { user, trialDaysLeft, isTrialActive, isDeveloper } = useAuth();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {user?.email ?? "there"} 👋</Text>
      <Text style={styles.level}>
        Current level: <Text style={styles.levelBadge}>{user?.level}</Text>
      </Text>
      <Text style={styles.info}>
        Next milestone: Reach{" "}
        {user?.level === "A2" ? "B1" : "the next level"} by focusing on speaking
        fluency and listening comprehension.
      </Text>

      {isTrialActive && !user?.isPremium && !isDeveloper && (
        <View style={styles.trialBanner}>
          <Text style={styles.trialText}>
            🔓 Free trial active — {trialDaysLeft} day
            {trialDaysLeft === 1 ? "" : "s"} left.
          </Text>
        </View>
      )}

      {user?.isPremium && (
        <View style={styles.premiumWrapper}>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>Premium active</Text>
            {isDeveloper && <Text style={styles.devText}>Developer mode</Text>}
          </View>
        </View>
      )}

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Conversation")}
      >
        <Text style={styles.primaryText}>Start speaking session</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Lessons")}
      >
        <Text style={styles.secondaryText}>View today’s lesson plan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#020617" },
  greeting: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 6 },
  level: { fontSize: 16, color: "#e5e7eb", marginBottom: 8 },
  levelBadge: { fontWeight: "700", color: "#38bdf8" },
  info: { fontSize: 14, color: "#9ca3af", marginBottom: 20 },
  trialBanner: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  trialText: { color: "#111827", fontWeight: "600", textAlign: "center" },
  premiumWrapper: { marginBottom: 24 },
  premiumBadge: {
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  premiumText: { color: "#022c22", fontWeight: "700" },
  devText: { color: "#064e3b", marginTop: 4, fontSize: 12 },
  primaryButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 999,
    marginBottom: 12,
  },
  primaryText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  secondaryButton: {
    borderColor: "#4b5563",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 999,
  },
  secondaryText: { color: "#e5e7eb", textAlign: "center" },
});

export default HomeScreen;
