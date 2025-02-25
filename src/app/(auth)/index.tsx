import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import imagePath from '@/src/constants/imagePath'
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const index = () => {

  const [isLoding, setIsLoding] = useState(false)

  let navigate_to_welcome =()=>{
    router.push("/(auth)/terms_agree")
  }

  let loading_timeout =()=>{
    setIsLoding(true)
    setTimeout(navigate_to_welcome,3000)
  }
  useEffect(() => {
    // component did mount
    const timeout = setTimeout(loading_timeout, 2000)

    // i use this return and clearTimeout cause the page run in background
    // component did unmoount
    return()=>{
      clearTimeout(timeout)
    }
  }, [])

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
      </View>
      <View style={styles.Body}>
        <Image source={imagePath.logo} style={styles.Logo_Style} resizeMode='Contain' />
        <Text style={styles.Text_Sparrow}>Sparrow</Text>
      </View>
      <View style={styles.footer}>
        {
          isLoding ?
            <>
              <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
              <Text style={styles.Text_Loading}>Loading...</Text>
            </>
            :
            <>
              <Text style={styles.TextFrom} >From</Text>
              <Text style={styles.TextShekhar}>Shekhar</Text>
            </>
        }

      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  Header: {
  },
  Body: {
    alignItems: "center",
    gap: verticalScale(10)
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end"
  },
  TextFrom: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  TextShekhar: {
    fontSize: moderateScale(15),
    color: "#000000"
  },
  Logo_Style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  Text_Sparrow: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    color: "#000000"
  },
  Text_Loading: {
    fontSize: moderateScale(15),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(15)
  }
})
