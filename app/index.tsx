import { useStore } from "@/utilities/useStore";
import { Redirect } from "expo-router";

export default function Index() {
  const user = useStore((state) => state.user);

  console.log("user shit", user);

  if (!user) {
    return <Redirect href="/SignIn" />;
  }

  if (user.role === "admin") {
    return <Redirect href="/AdminDashboard" />;
  }

  if (user.role === "employee") {
    return <Redirect href="/EmployeeDashboard" />;
  }
}
