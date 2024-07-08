import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const SiteItem = ({name, location, picture}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Mashwest')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://cdn.britannica.com/14/153414-050-6001EE2C/Ruins-Great-Zimbabwe-palace.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>{name}</Text>
        <Text style={tw`text-slate-400 text-sm`}>{location}</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default SiteItem

const styles = StyleSheet.create({})