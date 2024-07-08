import React from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';

export default function SearchButton() {

    const searchHandler = () =>{
        console.log('Item Searched')
    }

  return (
   <View style={tw`flex flex-row items-center bg-white w-full rounded-full py-2 px-4`}>
    {/* <TextInput placeholder='Search'></TextInput> */}
    <TextInput style={tw`flex-1`} placeholder='Search...' />

    <TouchableOpacity onPress={searchHandler}>
    <AntDesign name="search1" size={16} color="black" />
    </TouchableOpacity>

    
   </View>
  )
}

const styles = StyleSheet.create({

    butt: { 
        backgroundColor: 'white',
        marginTop: 80,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        Hieght: 40,
        Width: 40,
  
    }
  })