import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic.js";
import  {Score}  from "../components/Score.jsx";

export default function Detail() {
  const { slug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (slug) {
      getGameDetails(slug).then(setGameInfo);
    }
  }, [slug]);

  return (
    <ScrollView className="bg-black px-3">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: `${slug}`,
          headerRight: () => {},
        }}
      />
      <View className="mt-5">
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-xl underline decoration-yellow-600">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 mb-8 text-justify">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
      </ScrollView>
  );
}