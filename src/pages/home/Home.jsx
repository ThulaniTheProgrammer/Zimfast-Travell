import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { Entypo } from '@expo/vector-icons';
import tw from 'twrnc'
import LangaugeModal from '../../components/modals/LanguageModal';


const Home = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1 bg-white p-4`}>
      <View style={tw`text-white w-full items-end mt-4`}>
    
       <LangaugeModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
        <View style={tw`flex-1 justify-center content-center items-center`}>
     
<Image
  source={require("./Zimtravell.png")}
  style={tw`w-full h-64`}
/>
     
     
        </View>
        <View style={tw`h-12 font-bold`}>
        <PrimaryButton  style={tw`px-12`} text={'Explore'} onPress={() => navigation.navigate('Details')} />
        </View>
    </SafeAreaView>
  )
}

export default Home
