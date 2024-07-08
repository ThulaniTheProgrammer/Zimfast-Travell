import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Payment() {
  return (
    <SafeAreaView>
        <View style={tw`relative  mx-3   h-full`}>
    <View>
        <Text style={tw`font-medium text-xl mx-1 mb-8`}>Receipt</Text>
    </View>
    <View style={tw`bg-[#02B1EA] h-80 rounded-xl  pt-4 mb-4 px-2 py-4`}>
     
    <View style={tw`flex flex-row justify-between mb-2`}>
<View  style={tw`flex flex-row text-white  justify-between `}>
    <Text style={tw` text-white `}></Text>
    <Text style={tw`mx-2  text-gray-600 font-bold`}>Item Name</Text>
</View>
<View style={tw``}>
    <Text style={tw`mx-2  text-gray-600 font-bold`}>Value</Text>
</View>
<View style={tw``}>
    <Text style={tw`mx-2  text-gray-600 font-bold`}>Quntity</Text>
</View>
<View style={tw`font-thick`}>
<Text style={tw`mx-2  text-gray-600 font-bold`}>Price</Text>
</View>
        </View>

        <View style={tw`flex flex-row justify-between mb-2`}>
<View  style={tw`flex flex-row text-white  justify-between `}>
    <Text style={tw` text-white `}>1.</Text>
    <Text style={tw`mx-2  text-white `}>Mazoe</Text>
</View>
<View style={tw``}>
    <Text style={tw`font-thick text-white`}>2l</Text>
</View>
<View style={tw``}>
    <Text style={tw`font-thick text-white`}>5</Text>
</View>
<View style={tw`font-thick`}>
<Text style={tw`font-thick text-white`}>$5.00</Text>
</View>
        </View>

        
    </View>

    




<View style={tw`bg-[#02B1EA] relative px-2 rounded-xl py-5`}>
<View style={tw`flex flex-row justify-between `}>
<View  style={tw`flex justify-between font-bold text-white`}><Text style={tw`text-white font-bold`}>Subtotal</Text></View>
<View  style={tw`flex justify-between`}><Text style={tw`text-white font-bold`}>$30.00</Text></View>
</View>
<View style={tw`flex flex-row justify-between`}>
<View  style={tw`flex justify-between`}><Text style={tw`text-white font-thick`}>Discount</Text></View>
<View  style={tw`flex justify-between`}><Text style={tw`text-white font-thick my-1`}>$30.00</Text></View>
</View>
<View style={tw`border-dashed border-2 border-gray-400 w-full my-5`}>

</View>
<View style={tw`flex flex-row justify-between`}>
<Text style={tw`font-bold text-2xl text-white`} >Total</Text>
<Text style={tw`font-bold text-2xl text-white`}>$60.00</Text>
</View>

<View style={tw`flex flex-row justify-between py-4`}>
    <View>
<View style={tw`border border-white h-20 w-20 rounded-xl items-center justify-center flex `}>
    <Text style={tw`text-white `}><FontAwesome5 name="money-bill-wave" size={40} /></Text>
</View>
<Text style={tw`text-white`}>Cash</Text>
</View>


<View>
<View style={tw`border border-white h-20 w-20 items-center justify-center flex rounded-xl `}>
<MaterialCommunityIcons name="cash-multiple" size={40} color="white" /> 
</View>
<Text style={tw`text-white`}>Ecocash</Text>
</View>

<View>

<View style={tw`border border-white h-20 w-20 rounded-xl items-center justify-center flex `}>
<AntDesign name="creditcard" size={40} color="white" />
</View>
<Text style={tw`text-white`}>Swipe</Text>
</View>
</View>


<View  size={24}  style={tw`mx-5`}>
<View style={tw`absolute bottom--15  rounded-xl  border border-[#02B1EA] bg-white w-full center-2 flex   mr-10 py-4`}>
    <Text style={tw`text-center t font-bold`}>Confirm Payment</Text>
</View>
</View>

</View>
<View style={tw`px-2 absolute bottom-4  flex flex-row justify-between  w-full`}>
    <View>
<AntDesign name="home" size={24}  style={tw`text-[#02B1EA]`} />
</View>
<FontAwesome5 name="money-bill-wave" size={24} style={tw`text-[#02B1EA]`}  />
<Octicons name="report" size={24} style={tw`text-[#02B1EA]`}  />
<Ionicons name="notifications-circle-outline" size={24} style={tw`text-[#02B1EA]`}  />
</View>
</View>
    </SafeAreaView>
  )
}
