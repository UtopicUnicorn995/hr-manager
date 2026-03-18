import { useStore } from "@/utilities/useStore";
import { Button, Text, View } from "react-native";

export default function EmployeeDashboard() {
  const setUser = useStore((state) => state.setUser);
  return (
    <View>
      <Text>I am from Employee Dashboard</Text>
      <Button title="Signout" onPress={() => setUser(null)} />
    </View>
  );
}
