import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Payment from './Payment';


import tw from 'twrnc';



export default function Product({ navigation }) {
    return (
        
      <SafeAreaView style={tw`mx-4`} >
        <View style={tw`relative  h-full`}>
        <View style={tw`flex mt-2 flex-row justify-between`}>
            <TouchableOpacity>
        <Text style={tw`font-bold text-xl`}>Kumazi</Text>
        </TouchableOpacity>
<View style={tw` `}>
<View style={tw`  h-10 w-10 bg-blue-100 rounded-full`}>
    
</View>

</View>
         </View>

<View style={tw`w-full border rounded-2xl border-blue-300  mt-10`}>
<View style={tw`flex justify-end`}>
<FontAwesome5 name="barcode" size={40}  style={tw`flex justify-end text-[#02B1EA] text-right mx-4`}/>
</View>
</View>

<View style={tw`flex mt-8 flex-row justify-between`}>
<View style={tw`bg-blue-200 rounded-2xl w-18 py-2 px-1`}><Text style={tw`text-center font-bold text-gray-500`}>Product</Text></View>
<View style={tw`bg-blue-200 rounded-2xl w-18 py-2`}><Text style={tw`text-center font-bold text-gray-500`}>Product</Text></View>
<View style={tw`bg-blue-200 rounded-2xl w-18 py-2`}><Text style={tw`text-center font-bold text-gray-500`}>Product</Text></View>
<View style={tw`bg-blue-200 rounded-2xl w-18 py-2`}><Text style={tw`text-center font-bold text-gray-500`}>Product</Text></View>
</View>

<Text style={tw`font-bold text-black my-5`}>Stock</Text>
     <View style={tw`flex flex-row`}>
     <View style={tw`bg-[#3FC7F1] w-28 h-15 mt-1 mr-2 rounded-xl `}>
<View style={tw`flex flex-row pb-2`}>
         <Text style={tw`mx-2 font-medium text-white`}>Mazoe</Text>
         <Text style={tw`mx-2 font-thick text-gray-400`}>22 left</Text>
         </View>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2   text-white`}>2l</Text>
       <Text style={tw`mx-2  text-white`}>$20.00</Text>
</View>
</View>
<View style={tw`bg-[#3FC7F1] w-28 h-15 mt-1 mr-2 rounded-xl `}>
<View style={tw`flex flex-row pb-2`}>
         <Text style={tw`mx-2 font-medium text-white`}>Mazoe</Text>
         <Text style={tw`mx-2 font-thick text-gray-400`}>22 left</Text>
         </View>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2   text-white`}>2l</Text>
       <Text style={tw`mx-2  text-white`}>$20.00</Text>
</View>
</View>
<View style={tw`bg-[#3FC7F1] w-28 h-15 mt-1 mr-2 rounded-xl `}>
<View style={tw`flex flex-row pb-2`}>
         <Text style={tw`mx-2 font-medium text-white`}>Mazoe</Text>
         <Text style={tw`mx-2 font-thick text-gray-400`}>22 left</Text>
         </View>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2   text-white`}>2l</Text>
       <Text style={tw`mx-2  text-white`}>$20.00</Text>
</View>
</View>
</View>
     

<View style={tw`mx-2 absolute  bg-[#02B1EA] rounded-2xl py-4 w-full bottom-16`}>

<TouchableOpacity  onPress={() => navigation.navigate('Payment')}>
    <Text  onPress={() => navigation.navigate('Payment')} style={tw`text-white text-center font-medium text-xl`}>Add Product</Text>
    
    </TouchableOpacity> 

</View>

       

        

</View>
      </SafeAreaView >
    );
  }
