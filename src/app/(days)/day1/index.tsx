import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayOne = (props: any) => {
  console.log('check props', props)
  return (
    <View>
      {/* <Stack.Screen  /> */}
      <Text>DayOne</Text>
    </View>
  )
}

export default DayOne

const styles = StyleSheet.create({})