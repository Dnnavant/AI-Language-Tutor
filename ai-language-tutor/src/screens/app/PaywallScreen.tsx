import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

const PaywallScreen: React.FC = () => {
  const { upgradeToPremium, trialDaysLeft } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue learning</Text>
      <Text style={styles.body}>
        Your trial has {trialDaysLeft} days left. Upgrade to unlock unlimited AI
        conversations, lesson plans, and advanced analytics.
      </Text>
      <Button title="Upgrade to Premium" onPress={upgradeToPremium} />
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
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default PaywallScreen;
