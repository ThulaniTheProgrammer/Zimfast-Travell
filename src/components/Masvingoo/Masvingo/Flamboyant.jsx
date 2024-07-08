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

export default function Flamboyant() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Flamboyant Hotel Masvingo is a well-established and highly regarded hotel located in the city of Masvingo, Zimbabwe. Nestled in a prime location, the hotel offers a comfortable and luxurious stay for both business and leisure travelers. The hotel boasts a range of elegantly appointed rooms and suites, each thoughtfully designed to provide a relaxing and pleasant ambiance. Guests can enjoy modern amenities and conveniences, including air conditioning, flat-screen TVs, Wi-Fi access, and en-suite bathrooms. The hotel's on-site restaurant offers a diverse menu featuring a fusion of local and international cuisines, catering to various palates. Additionally, Flamboyant Hotel Masvingo features well-equipped conference and meeting facilities, making it an ideal venue for business events. The hotel's attentive and courteous staff are dedicated to providing excellent service, ensuring a memorable and enjoyable stay for all guests. With its convenient location, comfortable accommodations, and outstanding hospitality, Flamboyant Hotel Masvingo is a preferred choice for travelers seeking a high-quality hotel experience in Masvingo.`;

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
            uri: "https://pix10.agoda.net/hotelImages/19936026/-1/f2f559639e95fb4a79a02a0367f0833d.jpg?ca=16&ce=1&s=414x232&ar=16x9",
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

            <TouchableOpacity onPress={() => navigation.navigate('Flamboyantgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Flamboyant Hotel</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
