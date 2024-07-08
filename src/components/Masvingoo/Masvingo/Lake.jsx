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

export default function Lake() {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Lake Kyle, also known as Lake Mutirikwi, is a picturesque reservoir situated near the city of Masvingo in Zimbabwe. It is one of the largest man-made lakes in the country and serves as a popular recreational area for both locals and tourists. The lake is surrounded by stunning natural beauty, with rolling hills and lush vegetation creating a serene and tranquil atmosphere. Visitors to Lake Kyle can enjoy a variety of activities, such as boating, fishing, and picnicking along the scenic shoreline. The lake is home to a diverse range of fish species, making it a popular spot for fishing enthusiasts. Additionally, the nearby Kyle Recreational Park offers camping facilities, nature trails, and opportunities for birdwatching, allowing visitors to immerse themselves in the natural wonders of the area. Whether it's engaging in water sports, relaxing amidst nature, or simply enjoying the breathtaking views, Lake Kyle in Masvingo offers a delightful escape for those seeking outdoor adventures and a peaceful retreat.`;

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
            uri: "https://images.myguide-cdn.com/zimbabwe/companies/lake-mutirikwi-recreational-park/large/lake-mutirikwi-recreational-park-699815.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Lakegps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Lake Kyle</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Masvingo</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
