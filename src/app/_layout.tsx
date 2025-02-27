import React, { useEffect, useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import * as SplashScreen from "expo-splash-screen"
import { storeData } from '../utils/utils';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true); // ✅ Added missing state

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const access_token = await storeData.get("access_token");
                console.log("Retrieved access_token:", access_token);
                
                setIsLogin(!!access_token); // ✅ Ensures correct boolean value
            } catch (error) {
                console.error("Error retrieving access_token:", error);
            } finally {
                setLoading(false); // ✅ Hide splash screen after checking
                SplashScreen.hideAsync();
            }
        };

        checkLoginStatus();
    }, []);

    if (loading) return null; // ✅ Prevent rendering before data loads

    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
        </>
    );
};

export default RootLayout;