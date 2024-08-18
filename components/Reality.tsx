"use dom";

import * as React from 'react';
import "@/global.css";

export default React.forwardRef(function Reality(_props, ref) {
    // const playerRef = React.useRef<Phaser.Physics.Arcade.Image | null>(null);

    React.useImperativeHandle(ref, () => ({
        jump: () => {
            console.log("The jump button was clicked");
            // Jumps the player
            // playerRef.current.setVelocityY(-300);
        }
    }));

    return (
        <div>
            <h1>Reality</h1>
        </div>
    );
});