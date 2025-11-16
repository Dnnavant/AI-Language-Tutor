import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../../App";
import { useAuth } from "../../context/AuthContext";

export type DeveloperUnlockScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "DeveloperUnlock"
>;

const DeveloperUnlockScreen: React.FC<DeveloperUnlockScreenProps> = ({
  navigation,
}) => {
  const { applyDeveloperCode } = useAuth();
  const [code, setCode] = useState("");

  const handleApply = () => {
    const success = applyDeveloperCode(code.trim());
    if (!success) {
      Alert.alert("Invalid Code", "Please check the code and try again.");
      return;
    }
    Alert.alert("Unlocked", "Developer access enabled.", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Access</Text>
      <Text style={styles.subtitle}>
        Enter the private developer or family code to unlock all features and
        bypass the paywall.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter secret code"
        autoCapitalize="characters"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Unlock" onPress={handleApply} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default DeveloperUnlockScreen;
