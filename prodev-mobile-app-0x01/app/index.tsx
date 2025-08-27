import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>
      <Text style={styles.additionalText1}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.additionalText2}>
        React Native provides you a single codebase for cross platforms
      </Text>
      <Text style={styles.additionalText3}>ALX is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
  additionalText1: {
    fontSize: 25,
    color: "#4caf50",
    marginTop: 15,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
  },
  additionalText2: {
    fontSize: 18,
    color: "#ff9800",
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  additionalText3: {
    fontSize: 16,
    color: "#795548",
    marginTop: 8,
    fontWeight: "400",
    textAlign: "right",
    fontVariant: ["small-caps"],
  },
});
