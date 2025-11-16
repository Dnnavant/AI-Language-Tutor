// src/screens/app/PaywallScreen.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const PaywallScreen: React.FC = () => {
  const { upgradeToPremium, trialDaysLeft } = useAuth();
  const navigation = useNavigation<any>();

  const handleUpgrade = () => {
    // TODO: integrate real payments (Stripe/RevenueCat/etc.)
    upgradeToPremium();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your trial has ended</Text>
      <Text style={styles.subtitle}>
        Keep your AI speaking coach, personalized lesson plans, and progress
        tracking by upgrading to Premium.
      </Text>

      <View style={styles.card}>
        <Text style={styles.price}>$X.99 / month</Text>
        <Text style={styles.bullet}>✓ Unlimited conversation practice</Text>
        <Text style={styles.bullet}>✓ Adaptive lesson plans</Text>
        <Text style={styles.bullet}>✓ Level tracking & insights</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleUpgrade}>
        <Text style={styles.primaryText}>Upgrade to Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.linkText}>Have a coupon? Redeem it here.</Text>
      </TouchableOpacity>

      {trialDaysLeft > 0 && (
        <Text style={styles.note}>
          (Debug info: trialDaysLeft = {trialDaysLeft})
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#020617" },
  title: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#9ca3af", marginBottom: 24 },
  card: {
    backgroundColor: "#0b1120",
    padding: 20,
    borderRadius: 20,
    marginBottom: 24,
  },
  price: { color: "#38bdf8", fontSize: 20, fontWeight: "700", marginBottom: 12 },
  bullet: { color: "#e5e7eb", marginBottom: 6 },
  primaryButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 999,
    marginBottom: 12,
  },
  primaryText: { color: "#022c22", textAlign: "center", fontWeight: "700" },
  linkText: { color: "#60a5fa", textAlign: "center" },
  note: { marginTop: 12, textAlign: "center", fontSize: 12, color: "#6b7280" },
});

export default PaywallScreen;
