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

const Chimanimani = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Joina City is the 3rd tallest building in Zimbabwe standing at 105 metres (behind the Rerseve Bank of Zimbabwe (120m) and NRZ Headquarters (110m). It is owned by Masawara Investments.[citation needed] The building has the single largest lift and escalator installation in Zimbabwe. Construction started in 1998 but was halted due economic crisis that was plaguing Zimbabwe. then resumed and completed in 2010 The Building has 3 basement parking floors, 2 Open Shopping Mall namely Lower Ground (UG) and Upper Ground (UG) and 19 Commercial Floors.`;

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
            uri: "https://joinacity.co.zw/wp-content/uploads/2022/11/joina-city-picture.jpg",
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
           <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/ylgxESodSMs?si=YeaEZwFpmvBKPGws')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Joinacitygps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Joina City</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Harare Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Chimanimani
