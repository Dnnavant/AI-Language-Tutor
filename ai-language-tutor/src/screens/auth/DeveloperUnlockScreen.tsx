// src/screens/auth/DeveloperUnlockScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../App";

type Props = NativeStackScreenProps<AuthStackParamList, "DeveloperUnlock">;

const DeveloperUnlockScreen: React.FC<Props> = ({ navigation }) => {
  const { applyDeveloperCode } = useAuth();
  const [code, setCode] = useState("");

  const handleUnlock = () => {
    const ok = applyDeveloperCode(code.trim());
    if (!ok) {
      Alert.alert("Invalid code", "Please check your developer code and try again.");
    } else {
      Alert.alert("Developer mode", "Premium unlocked for this account.", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer access</Text>
      <Text style={styles.subtitle}>
        For the app owner & family members. Premium is free on this account.
      </Text>

      <Text style={styles.label}>Secret code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter developer code"
        placeholderTextColor="#6b7280"
        value={code}
        onChangeText={setCode}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleUnlock}>
        <Text style={styles.primaryText}>Unlock developer mode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#050816" },
  title: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#9ca3af", marginBottom: 24 },
  label: { color: "#e5e7eb", marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#fff",
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 999,
  },
  primaryText: { color: "#022c22", textAlign: "center", fontWeight: "700" },
});

export default DeveloperUnlockScreen;
