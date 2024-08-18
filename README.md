# Experimental DOM Components with Expo Canary

Based on this repo: https://github.com/EvanBacon/expo-dom-components-canary-example

This is just a small, requested repro of how forwardRefs doesn't seem to work as intended when "use dom" is applied in a component.
Instead they are applied to the WebView. In normal usage of a WebView, passing it a ref this would make sense. But it doesn't feel right when DOM components are so seamingly a part of the regular flow.

The "Reality"-tab has a DOM component in the part with a red border.

<img width="1228" alt="image" src="https://github.com/user-attachments/assets/420d0968-ea32-48d6-aea5-41c0ca9e8173">
