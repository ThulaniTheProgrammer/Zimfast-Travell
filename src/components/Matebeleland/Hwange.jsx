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

export default function Hwange() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Hwange National Park, located in western Zimbabwe, is a vast and captivating wilderness that encompasses diverse habitats and teems with an abundance of wildlife. As Zimbabwe's largest national park, Hwange offers a mesmerizing safari experience, with its iconic elephant herds, impressive populations of lions, leopards, and other members of the Big Five, and a plethora of other animal and bird species. The park's picturesque landscapes, ranging from grasslands to teak forests, provide a stunning backdrop for game drives and guided safaris, offering visitors the opportunity to witness extraordinary wildlife encounters and immerse themselves in the untamed beauty of Africa. With its rich biodiversity, cultural interactions, and breathtaking scenery, Hwange National Park stands as a remarkable destination for nature enthusiasts and safari adventurers alike.`;

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
            /><TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/agzUKmHqN2Y')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Hwangegps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Hwange National Park</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Matebeland</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView> 
    </View>
  );
}