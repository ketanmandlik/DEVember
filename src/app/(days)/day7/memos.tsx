import { useState } from 'react';
import { View, StyleSheet, Button, FlatList, Text } from 'react-native';
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';

export default function Memos() {
  const [recording, setRecording] = useState<Recording>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [memos, setMemos] = useState<String[]>([])

  async function startRecording() {
    try {
      if (permissionResponse !== null && permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    if(!recording) {
        return null
    }
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    if(uri) {
        setMemos((existingMemos) => [uri,...existingMemos])
    }
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
        <FlatList data={memos} renderItem={({item}) => <Text>{item}</Text>}/>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
