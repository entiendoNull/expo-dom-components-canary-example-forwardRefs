import { Slot, Tabs } from "expo-router";

export default function RootLayout() {
  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Reality" }} />
      <Tabs.Screen name="expectation" options={{ title: "Expectation" }} />
    </Tabs>
  );
}
