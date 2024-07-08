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

export default function Mashonaland() {
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
            <Text style={tw`bg-gray-200 rounded-full text-black font-bold  px-1 py-1`}>
              Accomodation
            </Text>
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

      
            <TouchableOpacity onPress={() => navigation.navigate('Ancillary')}>
            <View style={tw`flex flex-row`}>
              <Entypo
                style={tw`bg-green-200  text-green-400  font-thin`}
                name="flower"
                size={70}
               
              />
              <Text
                style={tw`bg-green-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
              >
                Ancillary
              </Text>
            </View>
            </TouchableOpacity>


          </View>
        </View>
        
        <View style={tw`flex flex-row mt-2 justify-between `}>
         
        <TouchableOpacity onPress={() => navigation.navigate('Activities')}>
            <View style={tw`flex flex-row `}>
            <Feather name="activity" size={70}             style={tw`bg-orange-200 text-orange-400 `} />
              <Text
                style={tw`bg-orange-100 justify-center text-center flex items-center w-28   py-8 text-black font-bold`}
              >
                Activities
              </Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Amenities')}>
            <View style={tw`flex flex-row`}>
              < Entypo name="folder-music"
                style={tw`bg-blue-200 text-blue-400 px-1 py-1`}
               
                size={70}
              
              />
              <Text
                style={tw`bg-blue-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
              >
                Amenities
              </Text>
            </View>
            </TouchableOpacity>


          </View>
        <Text style={tw`text-2xl mt-7 font-bold`}>You're Online</Text>
        <Text >Please Enjoy using the app</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cuthotel')}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEA-6YOrhbG3C8elgnW6fWskNnan-oVGA-DdmBOwKyhQ&s",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>CUT Hotel</Text>
        <Text style={tw`text-sm text-gray-400`}>Mashwest</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Caves')}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2doB7OsQxgrtDYHTrvbUlpkkf8uGk0htFGQICc8RhA&s",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Chinhoyi Caves</Text>
        <Text style={tw`text-sm text-gray-400`}>Mashwest</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Mazvikadei')}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mazwik_Aerial.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Mazvikadei</Text>
        <Text style={tw`text-sm text-gray-400`}>Mashwest</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Tm')}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sr2bLKqPAOiJ7G6EphfYWlLGX2VgootCcOhMMgauPw&s",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>TM Supermaket</Text>
        <Text style={tw`text-sm text-gray-400`}>Mashwest</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Cut')}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTKTL4ViYts-4P7da6zF_TxLF8WOmThKSkIIL7NoR9A&s",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Chinhoyi University of Technology</Text>
        <Text style={tw`text-sm text-gray-400`}>Mashwest</Text>
        </TouchableOpacity>

        

        

       

       

       

        

      </ScrollView>
    </View>
  );
}
