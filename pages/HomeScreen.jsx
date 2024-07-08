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



export default function HomeScreen({ navigation }) {
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
<Text>Hello</Text>
</View>
         </View>

<View style={tw`w-full border rounded-2xl border-blue-300  mt-10`}>
<View style={tw`flex justify-end`}>
<FontAwesome5 name="barcode" size={40}  style={tw`flex justify-end text-[#02B1EA] text-right mx-4`}/>
</View>
</View>
 
<View style={tw`flex text-white flex-row`}>
<View style={tw`bg-[#02B1EA] w-50 h-20 mt-5 rounded-xl mr-2`}>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2 font-thick text-white`}>Total sales</Text>
       <Text style={tw`mx-2 text-white font-bold`}>$20.00</Text>
</View>
 <Text style={tw`mx-2  text-white font-bold`}>View All</Text>
</View>
<View style={tw`bg-[#02B1EA] w-40 h-20 mt-5 rounded-xl`}>
 <Text style={tw`mx-2 font-thick text-white`}>Total Stock Value</Text>
       <Text style={tw`mx-2 text-white font-bold`}>$200.00</Text>
</View>
</View>

 <Text style={tw`font-bold text-black my-5`}>Stock</Text>
     <View style={tw`flex flex-row`}>
     <View style={tw`bg-[#3FC7F1] w-27 h-15 mt-1 mr-2 rounded-xl `}>
         <Text style={tw`mx-2 font-thick text-white`}>Mazoe</Text>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2 font-bold  text-white`}>2l</Text>
       <Text style={tw`mx-2 font-bold text-white`}>$20.00</Text>
</View>

</View>
<View style={tw`bg-[#3FC7F1] w-27 h-15 mt-1 rounded-xl mr-2 `}>
         <Text style={tw`mx-2 font-thick text-white`}>Mazoe</Text>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2 font-bold  text-white`}>2l</Text>
       <Text style={tw`mx-2 font-bold text-white`}>$20.00</Text>
</View>

</View>
<View style={tw`bg-[#3FC7F1] w-27 h-15 mt-1 rounded-xl `}>
         <Text style={tw`mx-2 font-thick text-white`}>Mazoe</Text>
<View style={tw`flex flex-row justify-between`}>
      <Text style={tw`mx-2 font-bold  text-white`}>2l</Text>
       <Text style={tw`mx-2 font-bold text-white`}>$20.00</Text>
</View>

</View>


</View>

<Text style={tw`font-bold text-black my-5`}>Orders</Text>
<View style={tw`mx-2 absolute  bg-[#02B1EA] rounded-2xl py-4 w-full bottom-16`}>

<TouchableOpacity  onPress={() => navigation.navigate('Payment')}>
    <Text  onPress={() => navigation.navigate('Payment')} style={tw`text-white text-center font-medium text-xl`}>Proceed With Payment</Text>
    
    </TouchableOpacity> 

</View>
<View style={tw`mx-2 absolute bottom-4 flex flex-row justify-between  w-full`}>
    <View>
<AntDesign name="home" size={24}  style={tw`text-[#02B1EA]`} />
</View>
<FontAwesome5 name="money-bill-wave" size={24} style={tw`text-[#02B1EA]`}  />
<Octicons name="report" size={24} style={tw`text-[#02B1EA]`}  />
<Ionicons name="notifications-circle-outline" size={24} style={tw`text-[#02B1EA]`}  />
</View>
</View>
      </SafeAreaView >
    );
  }
