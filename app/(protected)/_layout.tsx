import { useStore } from "@/utilities/useStore";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const user = useStore((state) => state.user);

  console.log("user", user);
  if (!user) {
    console.log("from signin");
    return <Redirect href="/SignIn" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
