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

const Lakekchivero = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Lake Chivero is a reservoir on the Manyame River in Zimbabwe. It was formerly called Lake McIlwaine in memory of Sir Robert McIlwaine, a former judge of the High Court and founder of Southern Rhodesia's (later Rhodesia's, now Zimbabwe's) soil and water conservation movement.Located southwest of Harare, it provides the main water supply for the city. The lake was constructed over two-and-a-half years and opened to the public in 1952. The dam wall is 400 metres long. The water is also used for irrigation purposes and commercial fishing. Some of the fishes that are found in the lake include common grass carp, tigerfish, black bream, Clarias gariepinus, yellowfish, and green-headed bream.`;

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
            uri: "https://zimfieldguide.com/sites/default/files/Images/world8.JPG",
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
            <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/empty_video')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Lakechiverogps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Lakechivero</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Harare Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Lakekchivero
