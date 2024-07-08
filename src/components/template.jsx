import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SearchButton from './Buttons/SearchButton'
import TourSite from './TourSites'
import SiteItem from './site-item/SiteItem'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Manicaland from './Manicaland/Manicaland'

const Template = () => {
  const navigation = useNavigation()
 

  return (

        <View >
      <Text style={tw`text-white font-semibold text-6 w-full items-end`}>Select A Province </Text>
      <Text style={tw`text-white font-semibold text-6 w-full items-end mb-16 `}>To Explore</Text>
<SearchButton/>

<View style={tw`mt-4`} />
<View onPress={() => navigation.navigate('OtpPage')}>

<TouchableOpacity onPress={() => navigation.navigate('Mashwest')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://cdn.britannica.com/14/153414-050-6001EE2C/Ruins-Great-Zimbabwe-palace.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Masvingo</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>

 

    <TouchableOpacity onPress={() => navigation.navigate('Matebeland')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://cdn.britannica.com/91/5391-050-78522514/Victoria-Falls-bridge-Zambezi-River-Zimbabwe-Zambia.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Matebeland</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>

   

    <TouchableOpacity onPress={() => navigation.navigate('Mashonaland')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://lh5.googleusercontent.com/proxy/lBtYk3Xr-gC9Cf14NVgMMAGnlI6nBSvy6HBKRF_OGCZdqNDjDpZNlkrd_Jhkc2aOrcHTVril0QEq4tSd2yiYssW3M_rUBBs7sa_Ntxg87ipfkPQSGJtQJUKuyRwQsdI",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Mashwest</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Manicaland')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://www.fambayi.com/assets/Uploads/multimedia/mutarazi-falls/Falls-a_edited__FillWzgwMCw1MzNd.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Manicaland</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('Mashwest')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://cdn.britannica.com/14/153414-050-6001EE2C/Ruins-Great-Zimbabwe-palace.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Masvingo</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => navigation.navigate('Harare')} style={tw`flex flex-row mb-4 h-24 bg-white p-2 rounded-lg`}>
      <View style={tw`bg-slate-700 rounded-xl h-full w-1/4`}>
      <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/19/74/35/360_F_519743552_V7EVzw0Al0MycEb3YG7d2eT9dP5AdDe9.jpg",
          }}
          style={tw`w-full rounded-xl h-full`}
        />
      </View>
      <View style={tw`flex flex-1 flex-col px-2`}>
        <Text style={tw`text-slate-900 font-semibold text-lg`}>Harare</Text>
        <Text style={tw`text-slate-400 text-sm`}>Zimbabwe</Text>
      </View>
      <TouchableOpacity style={tw``}>
      <AntDesign name="heart" size={16} color="#334155" />
      </TouchableOpacity>
    </TouchableOpacity>





</View>
<View style={tw`mb-24`} />

      </View>
  )
}

export default Template

const styles = StyleSheet.create({})