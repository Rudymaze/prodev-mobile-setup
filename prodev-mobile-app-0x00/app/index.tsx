import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Visit the about Page</Text>
      <Link
        href={"/about"}
        style={{ padding: 10, backgroundColor: "lightblue", borderRadius: 15 }}>
        Visit About Page
      </Link>
    </View>
  );
}
