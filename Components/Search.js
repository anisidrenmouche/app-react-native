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
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }


_loadFilms() {
  if (this.searchedText.length > 0) {
    this.setState({ isLoading: true }) // Lancement du chargement
    getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...this.state.films, ...data.results ],
          isLoading: false // Arrêt du chargement
        })
    })
  }
}

_searchTextInputChanged(text) {
  this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
}


_searchFilms() {
  this.page = 0
  this.totalPages = 0
  this.setState({
    films: [],
  }, () => {
      this._loadFilms()
  })
}
_displayDetailForFilm = (idFilm) => {
  console.log("Display film with id " + idFilm)
  this.props.navigation.navigate("FilmDetail", {idFilm})

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

  render() {
    console.log(this.state.isLoading);
    const { film, displayDetailForFilm } = this.props

    return (
      <View style={styles.main_container}
      onPress={() => displayDetailForFilm(film.id)}>
        
        <TextInput onSubmitEditing= {() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.TextInput} placeholder="Titre du film"/>
        <View style={{marginTop:1, }}>
        
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
      </View>
      <FlatList
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} 
          displayDetailForFilm={this._displayDetailForFilm}/>}
          data={this.state.films}
        />
        {this._displayLoading()}
      <View style={styles.screenContainer}>
        
      <Button style={{borderRadius: 5}} title="Rechercher votre film ici " color="#9acd32" onPress={() => this._searchFilms()}/>
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
    marginTop:45,
    flex:1,
    borderRadius:22,
    color:'white',
  },
    TextInput: {
        marginLeft:4,
        marginTop:-34,
        marginRight:5,
        height:50,
        borderColor:'green',
        borderWidth:5,
        backgroundColor:"white",
        padding:3,
        borderRadius: 35,
        marginVertical: 3,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 1,
    },
  })

export default Search