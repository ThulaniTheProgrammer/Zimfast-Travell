import React from 'react'
import { View } from 'react-native'
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

export default function Footer() {
     const navigation = useNavigation()
  return (
    <View>
    <View style={tw`flex flex-row justify-between mt-10`}>
    <View style={tw`flex flex-row justify-between `}>
      <View style={tw`flex flex-row `}>
        <Entypo
          style={tw`bg-gray-300 text-gray-400 px-1 py-1`}
          name="globe"
          size={70}
          
        />
          <TouchableOpacity onPress={() => navigation.navigate('Popular')} >
        <Text
          style={tw`bg-gray-200 justify-center text-center flex items-center w-25   py-8 text-black font-bold`}
        >
          Popular
        </Text>
        </TouchableOpacity>

      </View>
      <View style={tw`flex flex-row`}>
        <Entypo
          style={tw`bg-green-200  text-green-400  font-thin`}
          name="flower"
          size={70}
         
        />
           <TouchableOpacity onPress={() => navigation.navigate('Ancillary')} >
        <Text
          style={tw`bg-green-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
        >
          Ancillary
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  <View style={tw`flex flex-row mt-2 justify-between `}>
      <View style={tw`flex flex-row `}>
      <Feather name="activity" size={70}             style={tw`bg-orange-200 text-orange-400 `} />
      <TouchableOpacity onPress={() => navigation.navigate('Activities')} >
        <Text
          style={tw`bg-orange-100 justify-center text-center flex items-center w-28   py-8 text-black font-bold`}
        >
          Activities
        </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row`}>
 
        < Entypo name="folder-music"
          style={tw`bg-blue-200 text-blue-400 px-1 py-1`}
         
          size={70}
        
        />

<TouchableOpacity onPress={() => navigation.navigate('Amenities')} >
        <Text
          style={tw`bg-blue-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
        >
          Amenities
        </Text>
        </TouchableOpacity>
      </View>
    </View> 
    </View>
  )
}
