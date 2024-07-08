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

const Cuthotel = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Chinhoyi’s premier hospitality destinations. CUT Hotels has two hotels which are found along the Harare – Chirundu highway, these are CUT Hotel, Orange Grove Motel & a Guest House in Kariba, Cut Kariba Guest House.The breathtaking natural attractions of Chinhoyi Caves, the adventures on the Mazvikadei Dam and the recreational golf sporting on the Chinhoyi Country Club turf await you for your much needed getaway. The Hotel is a one stop shop where you find wireless internet, visa facility, a business centre for all clerical requirements, beauty parlor and a gift shop, giving you all the requisites of a modern hotel.`;

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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEA-6YOrhbG3C8elgnW6fWskNnan-oVGA-DdmBOwKyhQ&s",
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
           <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/1NskkLO_130')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cuthotelgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>CUT Hotel</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Cuthotel
