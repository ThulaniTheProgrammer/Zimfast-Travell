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

const Tm = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `TM Supermarket is a leading retail chain in Zimbabwe, offering a diverse range of products and services to customers. With multiple stores across the country, TM Supermarket provides a convenient shopping experience for urban communities. Their shelves are stocked with a wide selection of groceries, fresh produce, household items, personal care products, clothing, electronics, and more, catering to various customer needs and budgets. Committed to quality and affordability, TM Supermarket maintains competitive prices while ensuring product standards. They prioritize customer satisfaction through efficient services, well-trained staff, and loyalty programs. Additionally, TM Supermarket supports local businesses by sourcing locally produced goods, contributing to the local economy. With its emphasis on convenience, community involvement, and a comprehensive product range, TM Supermarket remains a popular choice for shoppers in Zimbabwe.`;

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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sr2bLKqPAOiJ7G6EphfYWlLGX2VgootCcOhMMgauPw&s",
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
         <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/ARgBcXiZ2PY')}>
            <FontAwesome name="video-camera" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Tmgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>TM Supermarket</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Tm