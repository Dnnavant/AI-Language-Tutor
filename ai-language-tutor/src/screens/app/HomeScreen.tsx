import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

const HomeScreen: React.FC = () => {
  const { user, trialDaysLeft } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome{user ? `, ${user.email}` : ""}</Text>
      <Text style={styles.subtitle}>Trial days left: {trialDaysLeft}</Text>
      <Text style={styles.body}>
        Start your next lesson or jump into a conversation to practice.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  body: {
    fontSize: 16,
  },
});

export default HomeScreen;
