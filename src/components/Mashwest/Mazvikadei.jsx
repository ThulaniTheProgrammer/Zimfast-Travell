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

const Mazvikadei = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Mazvikadei is a popular tourist destination located in Zimbabwe, approximately 80 kilometers west of Harare, the capital city. It is known for its scenic beauty and is centered around Lake Mazvikadei, also known as Lake Manyame. The lake, formed by the Mazvikadei Dam on the Manyame River, offers breathtaking views and a tranquil environment for relaxation and recreation. Visitors can engage in various water activities such as fishing, boating, canoeing, and swimming in the calm waters of the lake. The area is home to a range of lodges, resorts, and campsites that provide comfortable accommodation, restaurants, bars, and recreational facilities. These establishments are often situated along the lake shore, offering scenic vistas and easy access to water-based activities. Nature enthusiasts can explore the lush woodlands, grasslands, and wildlife that surround Mazvikadei, with opportunities for birdwatching and nature walks. The destination also features picnic and camping sites equipped with barbecue stands and seating areas, providing a chance to enjoy outdoor meals and spend nights under the starry sky. With its proximity to Harare, Mazvikadei is a popular choice for day trips and weekend getaways, offering a serene escape and an opportunity to immerse oneself in Zimbabwe's natural beauty and tranquility.`;

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
            uri: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mazwik_Aerial.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Mazvikadeigps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Mazvikadei</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Mazvikadei
