import React from 'react'
import tw from 'twrnc'
import TourComponent from '../../components/TourComponent';
import { Feather, Entypo } from '@expo/vector-icons';
import TourDescription from './TourDescription';
import TourButtons from '../../components/tour-components/TourButtons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native';

export default function TourInfo() {
    const navigation = useNavigation()
  return (
 <SafeAreaView style={tw`flex-1 relative bg-[#5D948F]`}>
    <TouchableOpacity style={tw`absolute bottom-4 right-4 bg-white rounded-full p-4 z-50`}>
        <Feather name="mic" size={24} color="black" />
    </TouchableOpacity>
    <View style={[tw`flex flex-row items-center justify-between px-2`]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw` rounded-full p-2`}>
            <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={tw`flex-1`} />
       
        <TouchableOpacity  style={tw`rounded-full p-2`}>
        <Feather name="search" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  style={tw`rounded-full p-2`}>
        <Feather name="bell" size={20} color="white" />
        </TouchableOpacity>
    </View>
    <ScrollView style={tw`px-2`}>
        <TourComponent/>
        <TourButtons />
        <TourDescription/>
    </ScrollView>
 </SafeAreaView>
  )
}