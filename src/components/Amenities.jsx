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

export default function Amenities() {
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
                <TouchableOpacity onPress={() => navigation.navigate('Popular')} >
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
                 <TouchableOpacity onPress={() => navigation.navigate('Ancillary')} >
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
            
              <Text
                style={tw`bg-orange-100 justify-center text-center flex items-center w-28   py-8 text-black font-bold`}
              >
                Activities
              </Text>
            </View>
            <View style={tw`flex flex-row`}>
       
              < Entypo name="folder-music"
                style={tw`bg-blue-200 text-blue-400 px-1 py-1`}
               
                size={70}
              
              />

<TouchableOpacity onPress={() => navigation.navigate('Amenities')} >
              <Text
                style={tw`bg-blue-100 flex items-center w-35  px-2 py-8 text-black font-bold`}
              >
                Amenities
              </Text>
              </TouchableOpacity>
            </View>
          </View> 
        <Text style={tw`text-2xl mt-7 font-bold`}>You're Online</Text>
        <Text >Please Enjoy using the app</Text>
       

      
        

        <TouchableOpacity onPress={() => navigation.navigate('Nandos')}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/FnEO-rkWIAE81SS.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Nandos Mutare</Text>
        <Text style={tw`text-sm text-gray-400`}>Manicaland</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Masangano')}>
        <Image
          source={{
            uri: "https://eturbonews.com/cdn-cgi/image/width=1030,height=673,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2019/07/0a1a-134.jpg",
          }}
          style={tw`w-full rounded-xl h-60 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-1`}>Masangano Lodge</Text>
        <Text style={tw`text-sm text-gray-400 mb-10`}>Manicaland</Text>
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
