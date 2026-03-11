import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const currentUser: "admin" | "hr" | "employee" = "admin";

  return (
    // <Stack screenOptions={{ headerShown: false }}>
    //   <Stack.Protected guard={["admin", "hr"].includes(currentUser)}>
    //     <Stack.Screen name="(admin)" />
    //   </Stack.Protected>

    //   <Stack.Protected guard={["employee"].includes(currentUser)}>
    //     <Stack.Screen name="(employee)" />
    //   </Stack.Protected>
    // </Stack>
    <Stack />
  );
}
