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

export default function Greatzim() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Great Zimbabwe is a historical site located in Zimbabwe, Africa, and is known for its ancient ruins. These ruins date back to the 11th century and provide a fascinating glimpse into the architectural and cultural achievements of the people who once inhabited the area. The site is notable for its stone structures, including walls, towers, and enclosures. One of the most prominent structures at Great Zimbabwe is the Great Enclosure, which is believed to have served as a royal palace or ceremonial center. This massive structure features intricately crafted stone walls and carvings, showcasing the impressive skills of the builders. The ruins of Great Zimbabwe hold great significance as they represent the advanced civilization that thrived in the region centuries ago. The stone walls and structures reveal the architectural prowess of the inhabitants, and the site has become a symbol of cultural heritage and national pride. Visiting Great Zimbabwe allows one to explore the remnants of a once-thriving civilization and appreciate the craftsmanship and ingenuity of the people who lived there. The site offers a unique opportunity to delve into the rich history of Zimbabwe and gain insights into the ancient traditions and culture of the region.`;

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
            uri: "https://cdn.britannica.com/14/153414-050-6001EE2C/Ruins-Great-Zimbabwe-palace.jpg",
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
            <TouchableOpacity onPress={() => navigation.navigate('Greatzimgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Great Zimbabwe</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
