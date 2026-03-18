import { useStore } from "@/utilities/useStore";
import { Redirect, Stack } from "expo-router";

export default function AdminLayout() {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Redirect href="/SignIn" />;
  }

  if (user.role !== "admin") {
    return <Redirect href="/EmployeeDashboard" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
