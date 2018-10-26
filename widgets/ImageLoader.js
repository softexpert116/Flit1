import React from 'react';
import Animated from 'react-native';

export default class ImageLoader extends React.Component {
    state = {
        opacity: new Animated.Value(0),
    }
    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000, 
            useNativeDriver: true,
        }).start();
    }

    render() {
        return (
        <Animated.Image 
            onLoad={this.onLoad}
            {...this.props}
            style={[
                {
                    opacity: this.state.opacity,
                    transform: [
                        {
                            scaleX: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 300],
                            })
                        }
                    ]
                },
                this.props.style,
            ]}
            />
        );
    }
}