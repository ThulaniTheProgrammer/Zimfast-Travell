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

export default function Victoriafalls() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Victoria Falls, also known as Mosi-oa-Tunya (the Smoke that Thunders), is a magnificent natural wonder located on the Zambezi River, straddling the border between Zambia and Zimbabwe. It is the largest waterfall in the world, boasting an impressive width of 1.7 kilometers (1.1 miles) and a breathtaking drop of approximately 108 meters (354 feet). The falls create a deafening roar and a constant spray of mist that can be seen from miles away, giving rise to its local name, Mosi-oa-Tunya. The mist blankets the surrounding rainforest, sustaining a diverse ecosystem and creating a unique microclimate.Visiting Victoria Falls is an awe-inspiring experience. The best time to witness its magnificence is during the wet season from November to April when the Zambezi River is in full flood. The volume of water flowing over the falls is at its highest, creating a spectacular display of power and beauty. However, even during the dry season from May to October, the falls offer a clear view of the rock formations and geology, allowing visitors to appreciate the intricate details of this natural masterpiece.Apart from admiring the falls, there are plenty of activities to enjoy in the Victoria Falls area. From thrilling white-water rafting and bungee jumping to scenic helicopter flights and wildlife safaris, there is something for everyone. The region's rich cultural heritage and historical significance add another layer of fascination to the experience. Victoria Falls continues to captivate and inspire visitors from around the world, leaving an indelible mark on those fortunate enough to witness its grandeur firsthand.`;

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
            uri: "https://cdn.britannica.com/91/5391-050-78522514/Victoria-Falls-bridge-Zambezi-River-Zimbabwe-Zambia.jpg",
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
           <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/H0LG5rOo_9w')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Victoriagps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Victoriafalls</Text>
        <Text style={tw`text-sm text-gray-400 px-4 mb-4`}>Matebeland</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView> 
    </View>
  );
}