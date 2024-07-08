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

const Cut = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Chinhoyi University of Technology (CUT) is a renowned institution of higher learning located in Chinhoyi, Zimbabwe. The university is committed to providing quality education in science, technology, engineering, and business-related disciplines. With a focus on practical skills and innovation, CUT equips students with the knowledge and expertise necessary to excel in their chosen fields. The university offers a wide range of undergraduate and postgraduate programs, fostering a conducive learning environment through modern facilities, well-equipped laboratories, and dedicated faculty members. CUT also emphasizes research and development, encouraging students and faculty to engage in innovative projects that contribute to national development. With a strong reputation for academic excellence and industry relevance, Chinhoyi University of Technology plays a significant role in shaping the future of Zimbabwe's technological and business sectors.`;

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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTKTL4ViYts-4P7da6zF_TxLF8WOmThKSkIIL7NoR9A&s",
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
      <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/nm0OFCgqHyc')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cutgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Chinhoyi University of Technology</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Cut
