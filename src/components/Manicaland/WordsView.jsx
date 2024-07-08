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
import Wordsviewgps from "./WordsViewgps";

const Wordsview = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `A visit to World's View in the Little Connemara lakes area of the Eastern Highlands mountain range above Troutbeck  is a must for the visitor as it is the highest point in the country that can be driven to and has a breath-taking 270⁰ outlook from the toposcope.The scenary has reminded many residents and visitors of the Scottish Highlands, particularly when the clouds are just scudding low overhead, or a mist hangs in the valleys. There are a three small dams, or what would be lochs in Scotland, on Little Connemara, the largest of which is Lake Caree, and all are stocked with rainbow trout. Around fifty, or more cottages and houses have been built up here, with a few residents at home all year round. Some have well-developed gardens, but the background scenery is made up of pine and wattle trees and areas of bare granite. Plaques of black granite are imbedded in the stone work giving distances to around 30 cities, towns and well-known places in Africa. Rusape and it is claimed, Harare can be seen on clear days, but always up here the air is crisp and cool. The site covering about 70 hectares is managed by the National Trust of Zimbabwe on the western edge of the Nyanga Downs plateau at an altitude of 2,000 metres and looks down on Nyanga village at about 600 metres. The grounds are well kept and fenced to keep out livestock, fire breaks have been cut and proteas planted and the area is lawned with picnic tables. Take your own food and refreshments as there are none available on site. In the immediate vicinity are two trout lakes surrounded by privately owned lodges. There is a soap stone art gallery with hundreds of art sculptures. Meet the artists and negotiate the price before buying!  The walk to the summit of World's View from the car park can be done by anybody who is reasonably fit within 30 minutes.`;

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
         <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/agzUKmHqN2Y')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('WordsView')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Words View</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Manicaland Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Wordsview
