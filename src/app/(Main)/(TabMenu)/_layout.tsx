import { Stack } from "expo-router";

export default function UserAuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="Exames" options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" options={{ headerShown: false}} />
      <Stack.Screen name="Configuration" options={{ headerShown: false }}/>
      <Stack.Screen name="Medicamentos" options={{ headerShown: false }}/>
      <Stack.Screen name="AdMedicamentos" options={{ headerShown: false }}/>
    </Stack>
  );
}
