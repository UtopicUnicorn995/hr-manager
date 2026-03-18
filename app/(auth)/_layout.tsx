import { Stack } from "expo-router";

export default function AuthenticationLayout() {
  return (
    <Stack initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
}
