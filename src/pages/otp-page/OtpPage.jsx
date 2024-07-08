import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather  } from '@expo/vector-icons';
import tw from 'twrnc'
import CustomHeader from '../../components/navigation/CustomHeader'
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import TourSite from '../../components/TourSites';



const OtpPage = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 bg-[#5D948F]`}>
      <View>
        <CustomHeader heading__title={'Home'} />
      </View>
      <View style={tw` flex-1 w-full p-4 items-center justify-center`}>
        <Text style={tw` text-lg font-semibold text-white text-center`}>Enter Chirorodziva otp and start yout tour with Mkhokeli</Text>
        <View style={tw`bg-white py-2 px-4 rounded-full flex-row items-center my-8`}>
        <TouchableOpacity>
        <AntDesign name="camerao" size={24} color="#334155" />
</TouchableOpacity>
          <TextInput style={tw`flex-1 px-2`} />
          <TouchableOpacity>
          <Feather name="send" size={24} color="#334155" />
          </TouchableOpacity>
        </View>
        <PrimaryButton text={'Start'} onPress={() => navigation.navigate('TourInfo')}/>
      </View>
    </View>
  )
}

export default OtpPage

const styles = StyleSheet.create({})