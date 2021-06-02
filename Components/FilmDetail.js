// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    }
  }

  componentDidMount () {
    getFilmDetailFromApi(this.state).then(data =>{
      this.setState ({
        film: data,
        isLoading: false
      })
    })
  }

  _displayFilm() {
    const { film } = this.state
    if (film != undefined) {
      return (
        <ScrollView style={styles.main_container}>
        <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.backdrop_path)}}
          />
        <View style={styles.content_container}>
        <View style={styles.header_container}>
        <Text style={styles.title_text}>jfjff{this.props.film == undefined ? "" : this.props.film.title}</Text>
        <Text style={styles.vote_text}>{this.props.film == undefined ? "" : this.props.film.vote_average}</Text>
        </View>
        <View style={styles.description_container}>
        <Text style={styles.description_text} numberOfLines={6}>{this.props.film == undefined ? "" : this.props.film.overview}</Text>
        </View>
        <View style={styles.date_container}>
        <Text style={styles.date_text}>Sorti le {this.props.film == undefined ? "" : this.props.film.release_date}</Text>
        </View>
        </View>
        </ScrollView>
        )
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

  render() {
    const { film } = this.state
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex:1,
  }
})

export default FilmDetail