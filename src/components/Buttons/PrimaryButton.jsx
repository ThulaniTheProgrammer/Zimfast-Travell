import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const PrimaryButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.butt} >
        <Text style={tw`text-center text-white bg-green-500 rounded-xl px-40 py-2 font-semibold text-xl px-10`}>
            {text}
            </Text>
            </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
 
  butt: { 
     
      borderRadius: 10,
     
    
      paddingHorizontal: 40,
    
      

  }
})