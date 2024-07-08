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

export default function Hippocrick() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Tucked away under a hill on the eastern shores of Lake Mutirikwi, lies a lodge architecturally crafted to reminisce the ancient Great Zimbabwe, the second largest stone monuments in Africa. Built up of stone and thatch the lodge is dressed up in grandeur and splendour that meet your greatest expectations, Hospitality. Each of the 20 individual lodges overlooks Lake Mutirikwi, Zimbabwe’s largest inland water body. Each lodge is a detached and self contained spacious facility adorned with en suite facilities. Visitors can lounge in the spacious lobby hall and bar, pace the infinitely apportioned garden, or take in the spectacular scenes from the restaurant views as they tuck in sumptuous local and international cuisine. Hippo creek offers a calm and tranquil conferencing venue that will allow participants to reflect on their deliberations with the aid of musical chatter of birds and insects. At Hippo Creek, whether you are on holiday or business, you will lose track of time as you explore the wide array of activities that are on offer. Each lodge has en suite facilities and provides your with the utmost privacy. Hippo Creek also provides facilities for caravans and camping. `;

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
            uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c6/02/a4/hippo-creek-lodge.jpg?w=1200&h=-1&s=1",
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
           <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Hippocrickgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Hippocrick</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
