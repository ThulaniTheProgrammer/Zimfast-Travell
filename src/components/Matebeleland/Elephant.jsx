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

export default function Wild() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Elephant's Walk Shopping and Artist Village is a vibrant mix of local artists, retailers, artisan studios, all working within in the cool tropical garden courtyard. The funky Africa Cafe serves delicious light meals and drinks whilst the Nam Tok Restaurant upstairs offer afro asian traditional foods. There is a museum which shows the material and visual culture of the peoples of the region - entry is free. Crocodile Cage diving can be experienced, a visit with out local Nyanaga (witchdoctor) or you can just sit under the palm trees and watch the world go by!`;

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
            uri: "https://lionrecoveryfund.org/wp-content/uploads/sites/3/2022/11/C9A3248-1.jpeg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Elephantgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Elephant Walk</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Matebeland</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView> 
    </View>
  );
}