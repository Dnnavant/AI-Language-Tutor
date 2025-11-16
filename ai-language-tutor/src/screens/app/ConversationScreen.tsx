import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ConversationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversation Practice</Text>
      <Text style={styles.body}>
        This is where the AI chat and voice conversation flow will live.
      </Text>
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
  },
});

export default ConversationScreen;
