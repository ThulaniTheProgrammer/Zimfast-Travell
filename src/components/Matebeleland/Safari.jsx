import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import * as Speech from "expo-speech";
import { Video } from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { Linking } from "react-native";

export default function Safari() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `The lodge is only 2 hours’ drive from Victoria Falls, a favourite with visitors from all over the world. Home to the world’s largest population of the African elephant, including the presidential herd, Hwange boasts an abundance of other wildlife including buffalo, lion, leopard and a host of other species. The prolific birdlife is a must see for the enthusiast with one of the world’s most diverse population of raptors.The lodge caters for a diverse range of guests from the lone adventurer to couples, groups, families and tour groups. It offers comfort, modern conveniences and an opportunity to experience the real African wild. Don’t forget, a camera is a must!`;

  const startSpeaking = () => {
    setIsSpeaking(true);
    Speech.speak(textToSpeech, {
      onDone: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const stopSpeaking = () => {
    setIsSpeaking(false);
    Speech.stop();
  };

  return (
    <View>
      <ScrollView>
        <Text>hello</Text>
        <Image
          source={{
            uri: "https://victoria-falls-safari-lodge.com/wp-content/uploads/2010/11/Victoria-Falls-Safari-Suites-Hotel-Accommodation-600x600.jpg",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
       
        <View style={tw``}>
          <View
            style={tw`bg-green-500 px w-full py-2 px-4 flex justify-between items-center flex-row`}
          >
            <Entypo
              name="sound"
              size={24}
              color="white"
              onPress={isSpeaking ? stopSpeaking : startSpeaking}
            />
      <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/WQsvVSw--sQ')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Wildgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Safari Victoria falls</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Matebeland</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView> 
    </View>
  );
}