import * as React from 'react';
import { View, Text  } from "react-native";

export default React.forwardRef(function Expectation(_props, ref) {
    // const playerRef = React.useRef<Phaser.Physics.Arcade.Image | null>(null);

    React.useImperativeHandle(ref, () => ({
        jump: () => {
            console.log("The jump button was clicked");
            // Jumps the player
            // playerRef.current.setVelocityY(-300);
        }
    }));

    return (
        <View>
            <Text>Expectation</Text>
        </View>
    );
});