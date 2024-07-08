import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function  Matebeland() {
    const navigation = useNavigation()
  return (
    <View style={tw`flex  justify-between bg-white-600 px-2 flex-col `}>
      <ScrollView>
        <View style={tw`flex justify-between bg-white-600  flex-col mx-3 mt-8`}>
          <Text style={tw`font-bold text-lg`}>Zim Travel</Text>
          <Text style={tw`font-bold text-lg`}>Travell Guide app</Text>
        </View>

        <TextInput
          style={tw`bg-orange-200 rounded-2xl   flex justify-center p-2 my-1.5  text-center w-full  `}
        ></TextInput>

        <View style={tw`flex flex-row justify-between`}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('Houses')}>
            <Text style={tw`bg-gray-200 rounded-full text-black font-bold  px-1 py-1`}>
              Accomodation
            </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={tw`bg-gray-200 font-bold rounded-full text-black  px-1 py-1`}>
              Attraction
            </Text>
          </View>
          <View>
            <Text style={tw`bg-gray-200 font-bold rounded-full text-black  px-1 py-1`}>
              Accessibility
            </Text>
          </View>
         
          <View></View>
        </View>

        <View style={tw`flex flex-row justify-between mt-10`}>
          <View style={tw`flex flex-row justify-between `}>
            <View style={tw`flex flex-row `}>
              <Entypo
                style={tw`bg-gray-300 text-gray-400 px-1 py-1`}
                name="globe"
                size={70}
                
              />
             <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
              <Text
                style={tw`bg-gray-200 justify-center text-center flex items-center w-25   py-8 text-black font-bold`}
              >
                Popular
              </Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row`}>
              <Entypo
                style={tw`bg-green-200  text-green-400  font-thin`}
                name="flower"
                size={70}
               
              />
              <TouchableOpacity onPress={() => navigation.navigate('Ancillary')}>
              <Text
                style={tw`bg-green-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
              >
                Ancillary
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row mt-2 justify-between `}>
            <View style={tw`flex flex-row `}>
            <Feather name="activity" size={70}             style={tw`bg-orange-200 text-orange-400 `} />
            <TouchableOpacity onPress={() => navigation.navigate('Activities')}>
              <Text
                style={tw`bg-orange-100 justify-center text-center flex items-center w-28   py-8 text-black font-bold`}
              >
                Activities
              </Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row`}>
       
              < Entypo name="folder-music"
                style={tw`bg-blue-200 text-blue-400 px-1 py-1`}
               
                size={70}
              
              />
                <TouchableOpacity onPress={() => navigation.navigate('Amenities')}>
              <Text
                style={tw`bg-blue-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
              >
                Amenities
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        <Text style={tw`text-2xl  mt-7 font-bold`}>You're Online</Text>
        <Text >Please Enjoy using the app</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Victoriafalls')}>
        <Image
          source={{
            uri: "https://cdn.britannica.com/91/5391-050-78522514/Victoria-Falls-bridge-Zambezi-River-Zimbabwe-Zambia.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Victoria Falls</Text>
        <Text style={tw`text-sm text-gray-400`}>Matebeland</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Wild')}>
        <Image
          source={{
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7a/8b/dc/wild-horizons-lookout.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Wild Horizon</Text>
        <Text style={tw`text-sm`}>Matebeland</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Elephant')}>
        <Image
          source={{
            uri: "https://gdb.voanews.com/D19EA9D2-5BF3-47FF-AE21-B396776E88D3_cx0_cy10_cw0_w408_r1_s.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Elephant Walk</Text>
        <Text style={tw`text-sm`}>Matebeland</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => navigation.navigate('Hwange')}>
        <Image
          source={{
            uri: "https://lionrecoveryfund.org/wp-content/uploads/sites/3/2022/11/C9A3248-1.jpeg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Hwange National Park</Text>
        <Text style={tw`text-sm`}>Matebeland</Text>
        </TouchableOpacity>
   
        <TouchableOpacity onPress={() => navigation.navigate('Safari')}>
        <Image
          source={{
            uri: "https://victoria-falls-safari-lodge.com/wp-content/uploads/2010/11/Victoria-Falls-Safari-Suites-Hotel-Accommodation-600x600.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Victoria Falls Safari</Text>
        <Text style={tw`text-sm`}>Matebeland</Text>
        </TouchableOpacity>
       




       



      </ScrollView>
    </View>
  );
}
