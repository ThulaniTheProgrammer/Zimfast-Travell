import React from 'react'
import { Text, View,Image,TouchableOpacity,ScrollView} from 'react-native'
import tw from 'twrnc'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Linking } from 'react-native';


export default function HouseDetail() {
  return (
   <View style={tw `mx-1`}>

     <View >

     </View>
     <Text style={tw`font-medium text-2xl my-4 mt-8`}>Facilities</Text>
        <View style={tw `flex justify-between flex-row`}>
            <View style={tw `flex justify-between flex-row`}>
           
            <AntDesign name="wifi" size={24} style={tw`text-orange-200`}  />
            <Text style={tw`font-medium text-sm my-1 ml-2`}>Wifi</Text>
            </View>

            <View style={tw `flex justify-between flex-row`}>
           
            <FontAwesome name="tv" size={24} style={tw`text-orange-200`}  />
           <Text style={tw`font-medium text-sm my-1 ml-2`}>TV</Text>
           </View>

           <View style={tw `flex justify-between flex-row`}>
           <FontAwesome name="bed" size={24} style={tw`text-orange-200`}  />
           <Text style={tw`font-medium text-sm my-1 ml-2`}>Bed</Text>
           </View>   
        </View>

        <View style={tw `flex mt-8 justify-between flex-row`}>

      <View style={tw `flex  flex-row`}>
     
    <View>
          <Text style={tw `mx-2 mt-1  font-bold`}>Mr Makeba</Text>
        <Text style={tw `mx-2  font-thin`}>Landlord</Text>
        </View>
        </View>

<View>
  <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=1234567890')}>
    <FontAwesome5 name="whatsapp" size={24} color="black" />
  </TouchableOpacity>


</View>

<View>
<TouchableOpacity onPress={() => Linking.openURL('tel:1234567890')}>
  <FontAwesome5 name="phone-alt" size={24} color="black" />
</TouchableOpacity>

</View>
          <View>

          </View>

        </View>
        

       
<Text style={tw `text-lg my-2 font-medium`}>Listing Gallery</Text>
<Image
          source={{
            uri: "https://images.pexels.com/photos/23228209/pexels-photo-23228209/free-photo-of-bedroom-with-hanging-bed.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />

<View style={tw `h-40 w-full`}>

</View>
   </View>
  )
}
