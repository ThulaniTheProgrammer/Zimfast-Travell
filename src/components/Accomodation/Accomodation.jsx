import React from 'react'
import tw from "twrnc"
import { Text, View,Image, ScrollView } from 'react-native'
import HouseDetail from './HouseDetail'



export default function Houses({navigation}) {
  return (
    
    <View style={tw `px-1`}>  
  
     <ScrollView>
  


     <View style={tw`relative mr-2 rounded-xl mt-2`}>
     <Image
          source={{
            uri: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Masvingo Accomodation</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$60 Per Night</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>

           <View style={tw`relative mr-2`}>
     <Image
          source={{
            uri: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Harare Accomodation</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$170 full house</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>

           <View style={tw`relative mr-2`}>
     <Image
          source={{
            uri: "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Chinhoyi House</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$100 per day</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>

           <View style={tw`relative mr-2`}>
     <Image
          source={{
            uri: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Victori Falls</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Night</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>

           <View style={tw`relative mr-2`}>
     <Image
          source={{
            uri: "https://images.pexels.com/photos/20074186/pexels-photo-20074186/free-photo-of-clear-sky-over-house.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={tw`w-full rounded-top-xl h-100 `}
        />
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>



           




     
         </ScrollView>
    </View>
   
  )
}
