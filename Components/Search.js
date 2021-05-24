// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, AppRegistry } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js


class Search extends React.Component {


   constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: []
    }
  }

  
    _loadFilms() {
      if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ films: data.results })
        })
      }
    }
 _searchTextInputChanged(text) {
  this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
}

  render() {
    console.log("RENDER");
    return (
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.TextInput} placeholder="Titre du film"/>
        <View style={{marginTop:1, }}>
        
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
      </View>
      <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      <View style={styles.screenContainer}>
      <Button style={{borderRadius: 5}} title="Rechercher votre film" color="#9acd32" onPress={() => this._loadFilms()}/>
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