import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LessonPlanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson Plans</Text>
      <Text style={styles.body}>
        Outline of upcoming lessons, grammar focus, and vocabulary goals will be
        shown here.
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

export default LessonPlanScreen;
