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

const Nyangani = () => {
  const navigation = useNavigation()
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = `Mount Nyangani is the highest mountain in Zimbabwe, located in the eastern part of the country within Nyanga National Park. It stands at an elevation of approximately 2,592 meters (8,504 feet) above sea level. The mountain is part of the Eastern Highlands, a range that stretches across the eastern border of Zimbabwe, Mozambique, and eastern South Africa. Mount Nyangani is known for its beautiful landscapes, lush greenery, and scenic views. It is covered in dense montane forests, which are home to a variety of plant and animal species. The mountain area is also characterized by numerous waterfalls, streams, and rock formations, adding to its natural beauty.The mountain holds cultural and historical significance for the local people. It is considered a sacred site by the Nyanga community, and it is believed to be a dwelling place for ancestral spirits. As a result, the mountain is often visited for spiritual and religious ceremonies.Hiking and trekking are popular activities on Mount Nyangani, attracting both locals and tourists. There are well-established trails that lead to the summit, providing opportunities to explore the diverse flora and fauna along the way. The climb to the top can be challenging but rewarding, offering breathtaking panoramic views of the surrounding countryside.Overall, Mount Nyangani offers a combination of natural beauty, cultural significance, and outdoor adventure, making it a notable destination for nature enthusiasts and those seeking an immersive experience in Zimbabwe's Eastern Highlands.`;

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
            uri: "https://www.fambayi.com/assets/Uploads/multimedia/mount-nyangani/Side_edited__FillWzgwMCw1MzNd.jpg",
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

            <TouchableOpacity onPress={() => navigation.navigate('Nyanganigps')} >
            <FontAwesome name="map-marker" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-xl px-4 font-bold mt-1`}>Mount Nyangani</Text>
        <Text style={tw`text-sm text-gray-400 px-4`}>Manicaland Province</Text>
        <Text style={tw`px-4 text-justify`}>{textToSpeech}</Text>
      </ScrollView>
    </View>
  );
}
export default Nyangani
