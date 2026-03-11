import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const user = {
    role: "admin",
  };
  console.log("I am inside the index2");

  if (!user.role) {
    console.log("authentication");
    return <Redirect href="/(authentication)" />;
  }

  if (user.role === "admin") {
    console.log("admin");
    return (
      <View>
        <Text>THere are shits happening here</Text>
      </View>
    );
  }

  if (user.role === "employee") {
    console.log("employee");
    return <Redirect href="/(employee)" />;
  }

  return (
    <View>
      <Text>THere are shits happening here</Text>
    </View>
  );
}
