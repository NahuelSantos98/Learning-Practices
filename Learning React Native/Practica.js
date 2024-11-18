import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from "react-native";
const icon = require("./assets/icon.png");

export default function Practica() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Esto se puede cambiar</Text>
      <Image source={icon} style={styles.image} />
      <Image
        source={{
          uri: "https://fundeu.fiile.org.ar/library/timthumb/timthumb.php?src=/uploadsfotos/basquet__basquetbol_o_basquetbol__adaptaciones_validas_fundeu_argentina.jpg&w=720",
        }}
        style={styles.image}
      />
      <Button
        title="Pulsa aqui"
        onPress={() => {
          alert("Button");
        }}
      />
      <TouchableHighlight
        underlayColor={"lightblue"}
        onPress={() => alert("TouchableHighlight")}
        style={styles.button}
      >
        <Text style={{ color: "white" }}>Tocar</Text>
      </TouchableHighlight>

      <Pressable
        onPress={() => alert('Pressable')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'red' : 'black',
            padding: 10,
            borderRadius: 50,
            marginTop: 10,
          },
        ]}
      >

        {({ pressed }) => (
          <Text style={{ color: 'white', fontSize: pressed ? 16 : 20 }} >Hola</Text>
        )}
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "blue",
    width: 75,
    height: 75,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
