// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, AppRegistry, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js


class Search extends React.Component {


   constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true }) // Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ 
          films: data.results,
          isLoading: false // Arrêt du chargement
          })
      })
    }
}  
_displayLoading() {
  if (this.state.isLoading) {
    return (
      <View style={styles.loading_container}>
         <ActivityIndicator size="large" color="#00ff00"/>
        {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
      </View>
    )
  }
}
 _searchTextInputChanged(text) {
  this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
}

  render() {
    console.log(this.state.isLoading);
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing= {() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.TextInput} placeholder="Titre du film"/>
        <View style={{marginTop:1, }}>
        
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
      </View>
      <FlatList
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
          data={this.state.films}
        />
        {this._displayLoading()}
      <View style={styles.screenContainer}>
        
      <Button style={{borderRadius: 5}} title="Rechercher votre film" color="#9acd32" onPress={() => this._loadFilms()}/>
    </View>  
    </View>

    )
  }
}

const styles = StyleSheet.create( {

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: "#0000ff",
  },
  screenContainer: {
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 11,
    backgroundColor: 'transparent', 
    borderRadius:33,
    color:'black',
  },
  main_container:{
    marginTop:40,
    flex:1,
    borderRadius:22,
    color:'white',
  },
    TextInput: {
        marginLeft:5,
        marginTop:20,
        marginRight:5,
        height:50,
        borderColor:'green',
        borderWidth:3,
        backgroundColor:"white",
        padding:1,
        borderRadius: 35,
        marginVertical: 3,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
    },
  })

export default Search