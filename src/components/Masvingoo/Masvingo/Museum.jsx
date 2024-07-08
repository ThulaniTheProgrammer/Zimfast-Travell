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

export default function Museum() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Masvingo Museum, also known as the Great Zimbabwe Museum, is a prominent cultural institution located in Masvingo, Zimbabwe. The museum is dedicated to preserving and showcasing the rich history and heritage of the region, with a particular focus on the ancient city of Great Zimbabwe. The museum's exhibits offer visitors a captivating journey through time, exploring the archaeological wonders and cultural significance of Great Zimbabwe, which is a UNESCO World Heritage site. The displays feature artifacts, sculptures, tools, pottery, and other archaeological discoveries that provide insights into the lives, traditions, and architectural achievements of the past. Visitors can learn about the intricate stone structures, trade networks, and social dynamics of the Great Zimbabwe civilization, which flourished between the 11th and 15th centuries. The museum also offers educational programs, guided tours, and interactive displays that engage visitors of all ages. Masvingo Museum serves as a gateway to the captivating history and cultural heritage of Zimbabwe, providing a valuable resource for both locals and tourists interested in exploring the country's fascinating past.`;

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
            uri: "https://mediaim.expedia.com/destination/2/8a1c0c4fe546a615142f35d4ea20b585.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Museumgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Masvingo Museum</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
