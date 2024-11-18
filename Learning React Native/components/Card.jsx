import { View, Image, Text, StyleSheet, Animated, Pressable } from "react-native"
import { useRef, useEffect } from 'react'
import {Score} from "./Score"
import { Link } from "expo-router"
import { styled } from "nativewind"

const StyledPressable = styled(Pressable)

export function Card({ game }) {

    const { image, slug, title, score, description } = game


    return (
        <Link href={`/${slug}`} asChild>
            <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
                <View className="flex-row gap-4" key={slug}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <View className="flex-shrink">
                        <Text className="mb-1" style={styles.title}>
                            {title}
                        </Text>
                        <Score score={score} maxScore={100} />
                        <Text className="mt-2 flex-shrink" style={styles.description}>
                            {description.slice(0, 100)}...
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </Link>
    )
}



export function AnimatedCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <Card game={game} />
        </Animated.View>
    );

}


const styles = StyleSheet.create({
    card: {
        marginBottom: 36,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        width: 107,
        height: 147,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: 'white'
    },
    description: {
        fontSize: 16,
        color: '#eee'
    },
    score: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'green'
    }
});
