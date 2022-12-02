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
                height={60}
                viewBox="0 0 110 60"
                style={[styles.activeBackground, animatedStyles]}
            >
                <Path
                    fill="#00929f"
                    d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
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
