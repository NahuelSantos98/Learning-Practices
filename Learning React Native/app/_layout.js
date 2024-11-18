import { View, Pressable } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { InfoIconCircle } from "../components/Icons";

export default function Layout() {
    return (
        <>
            <StatusBar style="light" />
            <View className="flex-1 ">
                <Stack
                    screenOptions={{
                        headerStyle: { backgroundColor: "black" },
                        headerTintColor: "white",
                        headerLeft: () => (
                            <Link asChild href='/'>
                                <Logo />
                            </Link>
                        ),
                        headerRight: () => (<Link asChild href="/about" >
                            <Pressable>
                                {({ pressed }) => <InfoIconCircle style={{ opacity: pressed ? 0.5 : 1 }} />}
                            </Pressable>
                        </Link>),
                        headerTitle: ""
                    }}
                />
            </View>
        </>
    );
}

