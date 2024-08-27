import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-col justify-around items-center h-screen">
      <StatusBar style="auto"></StatusBar>
      <Text>Inicio</Text>
    </View>
  );
}
