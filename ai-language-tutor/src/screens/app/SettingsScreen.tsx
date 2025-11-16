// src/screens/app/SettingsScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

const SettingsScreen: React.FC = () => {
  const { user, logout, upgradeToPremium, isDeveloper } = useAuth();
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    // Simple demo logic
    if (code === "FREE30") {
      upgradeToPremium();
      Alert.alert("Coupon applied", "You now have Premium access.");
    } else {
      Alert.alert("Invalid coupon", "Please check the code and try again.");
    }
    setCoupon("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription</Text>
        <Text style={styles.sectionText}>
          Status: {user?.isPremium ? "Premium" : "Free / Trial"}
          {isDeveloper ? " (Developer access)" : ""}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Coupons & deals</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter coupon code"
          placeholderTextColor="#6b7280"
          value={coupon}
          onChangeText={setCoupon}
          autoCapitalize="characters"
        />
        <TouchableOpacity style={styles.couponButton} onPress={handleApplyCoupon}>
          <Text style={styles.couponText}>Apply coupon</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#020617" },
  title: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 4 },
  email: { fontSize: 14, color: "#9ca3af", marginBottom: 20 },
  section: {
    backgroundColor: "#0b1120",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  sectionTitle: { color: "#e5e7eb", fontWeight: "600", marginBottom: 8 },
  sectionText: { color: "#9ca3af" },
  input: {
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#fff",
    marginBottom: 10,
    marginTop: 6,
  },
  couponButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    borderRadius: 999,
  },
  couponText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  logoutButton: {
    marginTop: 24,
    borderColor: "#ef4444",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 999,
  },
  logoutText: { color: "#fca5a5", textAlign: "center", fontWeight: "600" },
});

export default SettingsScreen;
