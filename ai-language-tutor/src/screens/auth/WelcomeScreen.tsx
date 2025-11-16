import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../../App";

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Welcome"
>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Language Tutor</Text>
      <Text style={styles.subtitle}>
        Learn faster and stay consistent with personalized lessons and real-time
        feedback.
      </Text>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonSpacer}>
          <Button
            title="Log In"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
        <Button
          title="Developer Unlock"
          onPress={() => navigation.navigate("DeveloperUnlock")}
          color="#7f5af0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  buttonGroup: {
    width: "100%",
  },
  buttonSpacer: {
    marginBottom: 12,
  },
});

export default WelcomeScreen;
