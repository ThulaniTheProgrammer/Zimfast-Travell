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
import Masanganogps from "./Masanganogps";

const Masangano = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Tucked away on the lower slopes of a tree-covered hillside in the Eastern district of Zimbabwe lies a delightful little lodge known by the name of Musangano Lodge - meaning ‘the place where people meet' in the local Shona language. If you are looking for the ultimate getaway in the Eastern Highlands, with the promise of complete tranquillity and spectacular scenery, Musangano Lodge is the ideal location. Visitors soon fall under its spell because of its serene and peaceful atmosphere, charming accommodation, superb cuisine, and stunning views, which invite to linger and unwind.`;

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
            uri: "https://eturbonews.com/cdn-cgi/image/width=1030,height=673,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2019/07/0a1a-134.jpg",
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
           <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/agzUKmHqN2Y')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Masanganogps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Masangano Lodge</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Manicaland Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Masangano
