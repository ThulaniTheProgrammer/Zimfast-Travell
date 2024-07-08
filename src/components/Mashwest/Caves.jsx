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

const Caves = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `The Chinhoyi Caves, located near the town of Chinhoyi in Zimbabwe, are a fascinating natural wonder that draw visitors from around the world. These caves have both geological significance and historical importance, making them a popular tourist destination. The Chinhoyi Caves are a system of limestone caves formed over millions of years through the erosion of the surrounding rocks by underground water sources. The caves consist of a network of chambers, passages, and tunnels, each with its own unique formations and characteristics. The most renowned feature of the Chinhoyi Caves is the Crystal Clear Pool, also known as the Sleeping Pool or Dark Cave. The pool is fed by an underground spring, resulting in remarkably clear, blue water. The pool is approximately 30 meters deep and is a popular spot for diving and swimming enthusiasts. Its translucent waters allow for excellent visibility, making it a unique and thrilling experience for visitors. In addition to their geological beauty, the Chinhoyi Caves hold historical significance in Zimbabwe. During the country's struggle for independence, the caves served as a refuge and hideout for freedom fighters. The caves were named after Chinhoyi, a nearby town, in honor of the fighters who sought shelter within its depths. Visitors to the Chinhoyi Caves can explore the caverns on guided tours, marveling at the natural beauty of the caves, including the stunning stalactites and stalagmites found throughout. The Crystal Clear Pool is a major attraction within the caves, where diving, snorkeling, and swimming are popular activities in its pristine waters. The Chinhoyi Caves are easily accessible by road from Chinhoyi town, located approximately 120 kilometers northwest of Harare, Zimbabwe's capital city. The caves are well-maintained and have facilities for visitors, including designated parking areas, picnic spots, and restroom facilities. Recognized as a national monument, the Chinhoyi Caves are protected by the National Museums and Monuments of Zimbabwe, ensuring their preservation for future generations. Visiting the Chinhoyi Caves offers a unique opportunity to witness the wonders of nature and delve into Zimbabwe's history, providing an unforgettable experience for adventurers and nature enthusiasts alike.`;

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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2doB7OsQxgrtDYHTrvbUlpkkf8uGk0htFGQICc8RhA&s",
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

            <TouchableOpacity onPress={() => navigation.navigate('Cavesgps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Chinhoyi Caves</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Mashonaland,West</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Caves
