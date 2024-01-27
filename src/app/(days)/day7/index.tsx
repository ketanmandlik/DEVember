import {  Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '@/component/core/day3/MarkdownDisplay'

const description = `#Voice Memos 
Work with the Microsoft and Audio Playback`

const DaySeven = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{'flex':1}}>
    <Stack.Screen options={{title: 'Day 7: Voice Memos'}} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={'/day7/memos'} asChild>
        <Button title='Go to Memos' />
      </Link>
    </SafeAreaView>
  )
}

export default DaySeven

const styles = StyleSheet.create({})