import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type NeumorphicButtonProps = {
    title: string,
    onPress: any
}

const NeumorphicButton = ({ onPress, title }: NeumorphicButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    shadowColor: '#095657',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.84,
    elevation: 5,
  },
  button: {
    backgroundColor: '#0a5f61', // Base color
    borderRadius: 100,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: '#333', // Text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NeumorphicButton;
