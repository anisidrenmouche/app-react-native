// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.TextInput} placeholder=" Titre du film"/>
        <View style={{marginTop:20, }}>
        
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
      </View>
      <Button style title="Rechercher votre film" color="#9acd32" onPress={() => {}}/>

      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item}/>}
      />
      </View>
      
    )
  }
}

const styles = StyleSheet.create( {

  Button:{
    alignItems: 'center',

  },
  
  main_container:{
    marginTop:20,
    flex:1,

  },
    TextInput: {
        marginLeft:5,
        marginTop:20,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        padding:2,
        shadowOpacity:33,
        borderRadius: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
         
    },
  })

  




export default Search