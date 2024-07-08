import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import CustomHeader from '../components/navigation/CustomHeader'

const GeneralLayout = ({children}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <CustomHeader heading__title={'Home'} />
      </View>
      <ScrollView
        style={[tw`min-h-full flex-1 bg-green-500`, { paddingHorizontal: 10 }]}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default GeneralLayout

const styles = StyleSheet.create({})