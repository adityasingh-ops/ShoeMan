import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring,
    withRepeat,
    withSequence,
    withTiming,
    withDelay,
    runOnJS,
    Easing,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const SCREEN_WIDTH = Dimensions.get('window').width;
const BUTTON_SIZE = 64;
const SWIPE_THRESHOLD = 100;

export default function CallInterface({ onAnswer , price}: { onAnswer?: () => void, price: number }) {
    const translateX = useSharedValue(0);
    const mirrorX = useSharedValue(-100); // Start from outside the view

    // Initialize mirror reflection animation
    React.useEffect(() => {
        const animateMirror = () => {
            mirrorX.value = withSequence(
                // Move from left to right
                withTiming(-100, { duration: 0 }), // Reset to start
                withDelay(
                    500, // Wait before starting
                    withTiming(SCREEN_WIDTH, {
                        duration: 2000,
                        easing: Easing.inOut(Easing.ease),
                    })
                )
            );

            // Repeat the animation every 3 seconds
            setTimeout(animateMirror, 3000);
        };

        animateMirror();
    }, []);

    const handleAnswer = () => {
        onAnswer?.();
    };

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx: any) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            const newX = ctx.startX + event.translationX;
            translateX.value = Math.max(0, Math.min(newX, SCREEN_WIDTH - BUTTON_SIZE));
        },
        onEnd: () => {
            if (translateX.value > SWIPE_THRESHOLD) {
                runOnJS(handleAnswer)();
            }
            translateX.value = withSpring(0);
        },
    });

    const slideStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const mirrorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: mirrorX.value }],
    }));

    return (
        <GestureHandlerRootView style={tw`flex-1`}>
            <View style={tw`flex-1 items-center justify-center`}>
                <View style={tw`w-[90%] h-14 bg-[#5B9EE1] rounded-full justify-center pl-1 overflow-hidden opacity-80 relative`}>
                    {/* Mirror Reflection */}
                    <Animated.View
                        style={[
                            {
                                position: 'absolute',
                                height: '60%',
                                width: 90,
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                opacity: 0.1,
                                borderRadius: 20,
                                transform: [{ skewX: '-90deg' }],
                                zIndex: 2,
                            },
                            mirrorStyle,
                        ]}
                    />

                    {/* Background text */}
                    <View style={tw`absolute w-full h-full items-center justify-center`}>
                        <Text style={tw`text-white text-lg`}>
                            proceed to checkout | {price}
                        </Text>
                    </View>

                    {/* Slider button */}
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View
                            style={[
                                tw`h-12 w-12 bg-white rounded-full  items-center justify-center`,
                                slideStyle,
                                { zIndex: 3 }, // Keep button above reflection
                            ]}
                        >
                            <View style={tw`flex-row items-center`}>
                                <Ionicons name="chevron-forward" size={10} color="blue-100" />
                                <Ionicons name="chevron-forward" size={20} color="blue" />
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}