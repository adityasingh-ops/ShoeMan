import { Stack } from "expo-router";

export default function RootLauout() {
    return (
        <Stack>
            <Stack.Screen
                name='(shop)'
                options={{ headerShown: false, title: 'shop' }}
            />
            <Stack.Screen
                name="product"
                options={{ headerShown: true, title: 'Product' }}
            />
            <Stack.Screen
                name="categories"
                options={{ headerShown: true, title: 'Categories' }}
            />
            <Stack.Screen
                name="auth"
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="cart"
                options={{ headerShown: true, presentation: 'modal' }}
            />
        </Stack>
    );
}