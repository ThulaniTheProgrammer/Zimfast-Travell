import React from "react";
import {Text,View,TouchableOpacity,TextInput,ScrollView,} from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from "../footer";

export default function Mashwest() {
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


<Footer />
        

        
    

        <Text style={tw`text-2xl mt-7 font-bold`}>You're Online</Text>
        <Text >Please Enjoy using the app</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Greatzim')}>
        <Image
          source={{
            uri: "https://cdn.britannica.com/14/153414-050-6001EE2C/Ruins-Great-Zimbabwe-palace.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Great Zimbabwe</Text>
        <Text style={tw`text-sm text-gray-400`}>Masvingo Province</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chickenin')}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/Fyak4fKXsAAPW2a.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Chicken Inn</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Flamboyant')}>
        <Image
          source={{
            uri: "https://pix10.agoda.net/hotelImages/19936026/-1/f2f559639e95fb4a79a02a0367f0833d.jpg?ca=16&ce=1&s=414x232&ar=16x9",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Flamboyant Hotel</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Lake')}>
        <Image
          source={{
            uri: "https://images.myguide-cdn.com/zimbabwe/companies/lake-mutirikwi-recreational-park/large/lake-mutirikwi-recreational-park-699815.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Lake Kyle</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Hippocrick')}>
        <Image
          source={{
            uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c6/02/a4/hippo-creek-lodge.jpg?w=1200&h=-1&s=1",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Hippocrick</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>

      
        <TouchableOpacity onPress={() => navigation.navigate('Museum')}>
        <Image
          source={{
            uri: "https://mediaim.expedia.com/destination/2/8a1c0c4fe546a615142f35d4ea20b585.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Masvingo Museum</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chevron')}>
        <Image
          source={{
            uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/3e/9d/the-chevron.jpg?w=1200&h=-1&s=1",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Chevron Hotel</Text>
        <Text style={tw`text-sm`}>Masvingo Province</Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Chickenin')}>
        <Image
          source={{
            uri: "https://startupbiz.co.zw/wp-content/uploads/2017/05/Chicken-Slice.jpg ",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Chicken Slice</Text>
        <Text style={tw`text-sm pb-10`}>Masvingo Province</Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Ivory')}>
        <Image
          source={{
            uri: "https://byolife.co.zw/wp-content/uploads/2024/02/The-Ivory-Cafe_2.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Ivory Caffee</Text>
        <Text style={tw`text-sm pb-10`}>Masvingo Province</Text>
        </TouchableOpacity>




      </ScrollView>
    </View>
  );
}
