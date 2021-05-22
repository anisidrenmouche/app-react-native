// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextInput style={styles.TextInput} placeholder=" Titre du film"/>
        <Button style={styles.button} title="Rechercher votre film" onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
    TextInput: {
        marginLeft:5,
        marginTop:20,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        borderRadius:20,
    },
    button: {
      margin:30,
      marginTop:40,
    },
  })




export default Search