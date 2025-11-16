import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      <Text style={styles.body}>
        Charts and streak tracking components will be rendered in this screen.
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

export default ProgressScreen;
