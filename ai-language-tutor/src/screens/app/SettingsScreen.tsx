import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

const SettingsScreen: React.FC = () => {
  const { logout, upgradeToPremium, user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.body}>Status: {user?.isPremium ? "Premium" : "Free"}</Text>
      {!user?.isPremium && (
        <View style={styles.spacer}>
          <Button title="Upgrade" onPress={upgradeToPremium} />
        </View>
      )}
      <Button title="Log Out" onPress={logout} color="#dc2626" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    marginBottom: 24,
  },
  spacer: {
    marginBottom: 16,
  },
});

export default SettingsScreen;
