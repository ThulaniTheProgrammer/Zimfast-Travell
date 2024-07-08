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

export default function Chevron() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Chevron Hotel Masvingo is a well-established hotel located in the city of Masvingo, Zimbabwe. Situated in a convenient and central location, Chevron Hotel offers a comfortable and inviting atmosphere for both business and leisure travelers. The hotel features a range of well-appointed rooms and suites, each designed with modern amenities and comforts to ensure a pleasant stay. Guests can enjoy amenities such as air conditioning, flat-screen TVs, Wi-Fi access, and en-suite bathrooms. The hotel's on-site restaurant serves a variety of delicious dishes, including both local and international cuisines, catering to diverse tastes. Additionally, Chevron Hotel Masvingo provides conference and meeting facilities, making it a suitable venue for business events and functions. The hotel's friendly and attentive staff are dedicated to providing exceptional service, ensuring that guests have a memorable and enjoyable experience. With its convenient location, comfortable accommodations, and warm hospitality, Chevron Hotel Masvingo is a preferred choice for travelers seeking a comfortable and convenient stay in Masvingo.`;

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
            uri: "https://pbs.twimg.com/media/Fyak4fKXsAAPW2a.jpg",
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

<TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/YXwynovnAds')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Chevrongps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Chevron Hotel</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
