import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useReducer } from "react";
import { View, TouchableOpacity, Text, StyleSheet, LayoutChangeEvent } from "react-native";
import Animated, { useAnimatedStyle, useDerivedValue, withSpring, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import GTabBarComponent from "./GTabBarComponent";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default function GTabBar({ state: { index: activeIndex, routes }, navigation, descriptors } : BottomTabBarProps) {
    const { bottom } = useSafeAreaInsets();

    const reducer = (state: any, action: { x: number; index: number }) => {
        // Add the new value to the state
        return [...state, { x: action.x, index: action.index }];
    };

    const [layout, dispatch] = useReducer(reducer, []);
    console.log(layout);

    const handleLayout = (event: LayoutChangeEvent, index: number) => {
        dispatch({ x: event.nativeEvent.layout.x, index });
    };

    // animations ------------------------------------------------------

    const xOffset = useDerivedValue(() => {
        // Our code hasn't finished rendering yet, so we can't use the layout values
        if (layout.length !== routes.length) return 0;
        // We can use the layout values
        // Copy layout to avoid errors between different threads
        // We subtract 25 so the active background is centered behind our TabBar Components
        // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
        // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
        return [...layout].find(({ index }) => index === activeIndex)!.x - 25;
        // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
        // or the layout changes (e.g. when the components haven't finished rendering yet)
    }, [activeIndex, layout]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            // translateX to the calculated offset with a smooth transition
            transform: [
                { translateX: withSpring(xOffset.value, { stiffness: 200, damping: 20 }) },
            ],
        };
    });

    return (
        <View style={[styles.tabBar, { paddingBottom: bottom }]}>
            <AnimatedSvg
                width={110}
                height={36}
                viewBox="0 0 90 36"
                style={[styles.activeBackground, animatedStyles]}
            >
                <Path
                    d="M9.86 7.543C13.307 23.803 27.803 36 45 36S76.693 23.804 80.14 7.543C81.334 3.193 85.296 0 90 0H0c4.704 0 8.666 3.194 9.86 7.543Z"
                    fill="#87F7D2"
                />
            </AnimatedSvg>

            <View style={styles.tabBarContainer}>
                {routes.map((route, index) => {
                    const active = index === activeIndex;
                    const { options } = descriptors[route.key];

                    return (
                        <GTabBarComponent
                            key={route.key}
                            active={active}
                            options={options}
                            onLayout={(e) => handleLayout(e, index)}
                            onPress={() => navigation.navigate(route.name)}
                            routeName={route.name}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "white",
    },
    activeBackground: {
        position: "absolute",
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
