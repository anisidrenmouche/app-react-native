import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FilmItem from './Components/FilmItem';
import Search from'./Components/Search';

const image = { uri: "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg" };

const App = () => (
  
    
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} blurRadius={2}>
    <Search>
   
   </Search>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;
