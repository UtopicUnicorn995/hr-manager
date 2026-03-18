import { useStore } from "@/utilities/useStore";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SignIn() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const router = useRouter();

  useEffect(() => {
    console.log("userr", user);

    if (user?.role === "admin") {
      router.navigate("/AdminDashboard");
    }

    if (user?.role === "employee") {
      router.navigate("/EmployeeDashboard");
    }
  }, [user]);

  const login = (userRole: any) => {
    setUser({ role: userRole });
  };

  return (
    <View>
      <View>
        <Text>HR Dashboard</Text>
      </View>
      <View>
        <Text>Login to your account</Text>
      </View>
      <View>
        <Text>Email Address</Text>
        <TextInput value="" />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput value="" />
      </View>
      <View>
        <View>
          <Text>Remember Me</Text>
        </View>

        <Text>Forgot Password</Text>
      </View>

      <View style={{ gap: 20, padding: 20 }}>
        <Button title="Sign in as Admin" onPress={() => login("admin")} />
        <Button title="Sign in as Employee" onPress={() => login("employee")} />
        <Button
          title="Sign in as Employee"
          onPress={() => router.navigate("/SignUp")}
        />
      </View>
    </View>
  );
}
