import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import tw from 'twrnc'

const Explore = () => {
  return (
    <GeneralLayout>
      <Text  style={tw`text-white font-semibold`}>Explore</Text>
    </GeneralLayout>
  )
}

export default Explore

const styles = StyleSheet.create({})