import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const TourButtons = () => {
  return (
    <View style={tw `justify-center items-center flex mb-8 `}>
    

<View style={[tw `relative rounded-2xl h-15  w-full bg-[#466045] px-4`,styles.button]}>
    <TouchableOpacity><Foundation name="play-video" size={24} color="white" /></TouchableOpacity>
    <TouchableOpacity><Ionicons name="musical-notes-outline" size={24} color="white" /></TouchableOpacity>
    <TouchableOpacity><FontAwesome name="map-marker" size={24} color="white" /></TouchableOpacity>
</View>
</View>
  )
}

export default TourButtons

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
         
        }
})