import * as React from 'react';
import { View, Text, Alert  } from "react-native";
import Reality from "@/components/Reality";
import Button from "@/components/Button";

export default function Index() {
  const gameRef = React.useRef<{ jump: () => void }>();

  const pressedBtnHandler = () => {
    if(!gameRef.current?.jump) {
      Alert.alert("Error", "The jump function is not available");
      console.log(gameRef.current);
      return;
    }

    gameRef.current?.jump();
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ borderColor: 'red', borderWidth: 2, flex: 1 }}>
        <Reality ref={gameRef}/>
      </View>
      <View style={{ borderColor: 'blue', borderWidth: 2, flex: 1 }}>
        <Text>
          See console for output
        </Text>
        <Button text="Jump" pressed={pressedBtnHandler} />
      </View>
    </View>
  );
}