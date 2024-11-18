import { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import {AnimatedCard} from "./Card";



export function Main() {

    const [games, setGames] = useState([])

    useEffect(() => {
        getLatestGames()
            .then(res => setGames(res))
    }, [])



    return (
        <View className="bg-black"> 
            {games.length === 0 ?
                <ActivityIndicator color={"white"} size={"large"} />
                :
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => (
                        <AnimatedCard game={item} index={index}/>
                    )}
                />
            }
        </View>
    );
}

