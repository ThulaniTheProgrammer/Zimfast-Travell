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

export default function Wild() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Wild Horizons is a renowned adventure and safari company located in Victoria Falls, Zimbabwe. With a focus on providing unforgettable experiences in one of Africa's most iconic destinations, Wild Horizons offers a wide range of thrilling activities and immersive wildlife encounters. Visitors can embark on exhilarating adventures such as white-water rafting on the Zambezi River, bungee jumping from the Victoria Falls Bridge, or taking a scenic helicopter flight over the magnificent Victoria Falls. For those seeking a more tranquil experience, the company also organizes sunset cruises along the Zambezi River, allowing guests to relax and soak in the breathtaking African vistas. In addition, Wild Horizons offers guided safaris and game drives in nearby national parks, providing opportunities to spot the Big Five and other fascinating wildlife species. With a strong commitment to conservation and responsible tourism, Wild Horizons ensures that guests have a memorable and environmentally sustainable experience. Whether seeking adrenaline-pumping adventures or serene natural encounters, Wild Horizons is the go-to company for exploring the wonders of Victoria Falls and its surrounding wilderness.`;

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
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7a/8b/dc/wild-horizons-lookout.jpg",
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
       <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/QXhp78eAEls')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Wildgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Wild Horizon</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Matebeland</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView> 
    </View>
  );
}