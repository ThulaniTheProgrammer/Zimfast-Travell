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

export default function Ivory() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Experience a culinary delight like no other at The Ivory Café, the premier dining destination in Masvingo. Prepare to have your taste buds tantalized with our exquisite dishes, meticulously crafted using only the finest ingredients. Each plate is a work of art, presented with a unique flair that will leave you in awe. Our menu is a haven of flavor, constantly evolving to offer new and exciting taste adventures. Explore a world of joyful taste sensations as you discover new favorites with every visit.To complement your meal, indulge in our classic drinks. From masterfully crafted cocktails to a wide selection of beverages, we have the perfect libation to enhance your dining experience. The Ivory Café is more than just a restaurant—it's an experience that engages all your senses. Step into our stylish ambiance, where modern elegance creates the perfect backdrop for both casual gatherings and special occasions. Our attentive staff is dedicated to providing exceptional service, ensuring that every moment spent at The Ivory Café is a memorable one.Locals and visitors alike have made The Ivory Café their happy place, and we invite you to discover why. Unwind, savor, and create lasting memories as you embark on a culinary journey like no other in the heart of Masvingo. `;

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
            uri: "https://byolife.co.zw/wp-content/uploads/2024/02/The-Ivory-Cafe_2.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Ivorygps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Ivory Cafe</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
