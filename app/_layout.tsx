import { useStore } from "@/utilities/useStore";
import { Stack } from "expo-router";

export default function RootLayout() {
  const user = useStore((state) => state.user);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(protected)" />
      </Stack.Protected>
    </Stack>
  );
}
