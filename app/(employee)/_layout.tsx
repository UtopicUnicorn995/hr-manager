import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
