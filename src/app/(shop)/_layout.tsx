import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { ImageBackground, View } from "react-native";
import tw from "twrnc";
import { Icon } from "@expo/vector-icons/build/createIconSet";

export default function TabLayout() {
    return (
        <View style={tw`flex-1`}>
            <ImageBackground
                source={require("@/assets/images/bottom.png")}
                style={tw`absolute bottom-0 w-full h-30 bg-transparent z-20`}
                resizeMode="cover"
            />
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',

                    tabBarLabelStyle: {
                        fontSize: 12,

                    },
                    tabBarShowLabel: false,
                    tabBarStyle: [
                        tw`absolute bottom-0 w-full border-t-0 z-30  `,
                        {
                            backgroundColor: 'transparent',
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                    ],
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        headerShadowVisible: false,
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        title: '',
                        tabBarIcon: () => (
                            <View style={[
                                {
                                    backgroundColor: '#5B9EE1',
                                    backdropFilter: 'blur(10px)',
                                    height: 64,
                                    width: 64,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 32,
                                    marginTop: -48,
                                },
                                {
                                    shadowColor: '#5B9EE1',
                                    shadowOffset: { width: 0, height: 8 },
                                    shadowOpacity: 0.9,
                                    shadowRadius: 12,
                                    elevation: 6,
                                },
                            ]}

                            >
                                <Ionicons name="bag-handle-outline" size={24} color="white" />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="book" size={24} color={color} />
                        ),
                        headerShown: false
                    }}

                />

            </Tabs>
        </View>
    );
}