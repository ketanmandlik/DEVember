import NeumorphicButton from '@/component/core/day26/NeumorphicButton';
import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'

const grey = '#91A1BD'

const DayTwentySix = () => {
  const handlePress = () => {
    // Handle button press
  };

  const NewMorph = ({children, size, style}: any) => {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <View style={[
                    styles.inner,
                    { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
                    style
                ]}>{children}</View>
            </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{alignSelf: 'stretch'}}>
        <View style={{marginTop: 32, marginHorizontal: 32}}>
            <View style={styles.topContainer}>
                <NewMorph size={48}>
                <AntDesign name='arrowleft' size={20} color={grey} />
                </NewMorph>
                <View>
                    <Text style={styles.playing}>Playing Now</Text>
                </View>
                <NewMorph size={48}>
                <Entypo name='menu' size={24} color={grey} />
                </NewMorph>
            </View>
            <View style={styles.songArtContainer}>
                <NewMorph size={300}>
                    <Image source={{uri: 'https://images.pexels.com/photos/1537636/pexels-photo-1537636.jpeg'}} style={styles.songArt} />
                </NewMorph>
            </View>
            <View style={styles.songContainer}>
                <Text style={styles.title}>Love Me Like You Do</Text>
                <Text style={styles.artist}>Song by Ellie Goulding</Text>
            </View>
            <View style={styles.trackContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.time}>1.26</Text>
                    <Text style={styles.time}>4.16</Text>
                </View>
            </View>
            <View style={styles.controlsCOntainer}>
                <NewMorph size={60}>
                    <Ionicons name='play-back' size={24} color={grey}/>
                </NewMorph>
                <NewMorph size={80} style={{backgroundColor: '#8AAAFF'}}>
                    <Ionicons name='pause' size={42} color={grey}/>
                </NewMorph>
                <NewMorph size={60}>
                    <Ionicons name='play-forward' size={24} color={grey}/>
                </NewMorph>
            </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DEE9FD',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  playing: {
    fontWeight: '800',
    color: grey,
    fontFamily: 'AmaticBold',
    fontSize: 30
  },
  topShadow: {
    shadowOffset: {
        width: -6,
        height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  },
  bottomShadow: {
    shadowOffset: {
        width: 6,
        height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD'
  },
  inner:{
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems:'center'
  },
  songArt: {
    width: 300,
    aspectRatio: 1,
    borderRadius: 150,
    borderColor: '#D7E1FC',
    borderWidth: 10
  },
  songContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    color: '#6C7A93',
    fontWeight: '600',
    fontFamily: 'AmaticBold',

  },
  artist: {
    marginTop: 6,
    color: grey,
    fontWeight: '500',
    fontFamily: 'AmaticBold',

  },
  trackContainer:{
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 20,
    color:grey,
    fontFamily: 'AmaticBold',
  },
  controlsCOntainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});

export default DayTwentySix;
