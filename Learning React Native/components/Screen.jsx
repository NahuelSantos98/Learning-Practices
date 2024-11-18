import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Screen({children}){
    return (
    <SafeAreaProvider>
    <View className="bg-black min-h-screen px-2">{children}</View>
    </SafeAreaProvider>
    )
}