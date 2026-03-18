import { useStore } from "@/utilities/useStore";
import { Redirect, Stack, useRouter } from "expo-router";

export default function EmployeeLayout() {
  const user = useStore((state) => state.user);

  const router = useRouter();

  if (!user) {
    console.log("gooo to signin");
    return router.replace("/EmployeeDashboard");
  }

  if (user.role !== "employee") {
    return <Redirect href="/EmployeeDashboard" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
