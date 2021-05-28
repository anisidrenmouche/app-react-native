// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'


class FilmItem extends React.Component {
    render() {
      const { film, displayDetailForFilm } = this.props
        return (
          <TouchableOpacity style={styles.main_container}
          onPress={() => displayDetailForFilm(film.id)}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(film.poster_path)}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginTop:20,
    margin: 0,
    
  },
  image: {
    width: 120,
    height: 180,
    margin: 4,
    borderRadius:20,
    
  },
  content_container: {
    flex: 1,
    margin: 2,
    color:'white',
  },
  header_container: {
    flex: 2,
    flexDirection: 'row',
    color:'white',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color:'black',
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#666666',
    color:'black',
  },
  description_container: {
    flex: 6
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    marginTop:2,
    color:'black',
  },
  date_container: {
    flex: 1,
    color:'black',
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
    color:'black',
  }
})

export default FilmItem