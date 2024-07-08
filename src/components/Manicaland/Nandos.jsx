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

const Nandos = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Nando's is a popular international restaurant chain known for its flame-grilled peri-peri chicken. While I don't have specific information about the Nando's restaurant in Mutare, Zimbabwe, I can provide you with a general description of Nando's and its offerings. Nando's was founded in South Africa in 1987 and has since expanded to become a global brand with restaurants in numerous countries worldwide. The restaurant specializes in Portuguese-style chicken dishes, marinated in peri-peri sauce—a spicy sauce made from African bird's eye chili peppers blended with various herbs and spices.Typically, Nando's restaurants offer a casual dining experience with a vibrant and colorful atmosphere. The menu features a variety of chicken dishes, including whole chickens, chicken wings, chicken burgers, and wraps. Customers can choose their preferred level of spiciness for their chicken, ranging from mild to extra hot. In addition to chicken, Nando's often serves side dishes such as fries, rice, coleslaw, and grilled vegetables. Nando's has gained popularity for its flavorful peri-peri chicken and its unique dining experience. The restaurant chain is known for its cheeky advertising campaigns, featuring humorous and often socially relevant messages. Please note that specific details about the Nando's restaurant in Mutare, Zimbabwe, such as its location or local menu offerings, may have changed since my last knowledge update in September 2021. It's always a good idea to check with local sources or Nando's official website for the most up-to-date information.`;

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
            uri: "https://pbs.twimg.com/media/FnEO-rkWIAE81SS.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Nandosgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Nandos Mutare</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Manicaland Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Nandos
