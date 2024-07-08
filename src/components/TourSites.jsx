import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const TourSite = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.butt} >
        <Text style={[tw`text-center`,styles.button]}>
            {}
            </Text>
            
            </TouchableOpacity>
  )
}

export default TourSite

const styles = StyleSheet.create({
  button: {
      color: 'black',
      fontWeight: 400,
      
  },
  butt: { 
      backgroundColor: '#466045',
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 60,
      backgroundColor: 'white',
      marginTop: 20,
      

  }
})