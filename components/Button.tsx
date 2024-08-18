import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string;
    pressed: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <TouchableOpacity 
            onPress={props.pressed}
            style={styles.button}
        >
          <Text style={styles.buttonText}>
            {props.text}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });