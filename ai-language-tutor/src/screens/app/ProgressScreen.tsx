// src/screens/app/ProgressScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

const ProgressScreen: React.FC = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your progress</Text>
      <Text style={styles.subtitle}>
        Current level: <Text style={styles.level}>{user?.level}</Text>
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Speaking confidence</Text>
        <Text style={styles.text}>Estimated: Medium</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Listening comprehension</Text>
        <Text style={styles.text}>Estimated: Needs focus on fast speech.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Next goal</Text>
        <Text style={styles.text}>
          Move toward the next CEFR level by practicing 10–15 minutes a day.
        </Text>
      </View>

      <Text style={styles.note}>
        (Later this screen can show graphs, streaks, and AI-based level updates.)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#020617" },
  title: { fontSize: 22, fontWeight: "700", color: "#fff", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#9ca3af", marginBottom: 16 },
  level: { color: "#38bdf8", fontWeight: "700" },
  card: {
    backgroundColor: "#0b1120",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  sectionTitle: { color: "#e5e7eb", fontWeight: "600", marginBottom: 4 },
  text: { color: "#9ca3af", fontSize: 13 },
  note: { marginTop: 16, color: "#6b7280", fontSize: 12 },
});

export default ProgressScreen;
