// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, AppRegistry } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.TextInput} placeholder="Titre du film"/>
        <View style={{marginTop:1, }}>
        
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
      </View>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item}/>}
      />
      <View style={styles.screenContainer}>
      <Button style={{borderRadius: 5}} title="Rechercher votre film" color="#9acd32" onPress={() => {}}/>
    </View>
                  
    </View>

    )
  }
}

const styles = StyleSheet.create( {

  screenContainer: {
    
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 11,
    backgroundColor: 'transparent', 

  },

  main_container:{
    marginTop:40,
    flex:1,
  },
    TextInput: {
        marginLeft:5,
        marginTop:20,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        padding:1,
        borderRadius: 15,
        marginVertical: 1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        fontWeight: 'bold',
    
    },
  })

export default Search