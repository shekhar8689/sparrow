import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const Login = () => {

  const [visibleCountry, setVisibleCountry] = useState(false)
  const [countryName, setCountryName] = useState('India')
  const [countryCode, setCountryCode] = useState("+ 91")

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp")
  }
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.TitleContainer}>
          <Text style={styles.MainTitleHeader}>Enter your phone number</Text>
          <Text style={styles.SubTitleHeader}>Sparrow app need to verify your phone number.
            <Text style={styles.linkSubTitleHeader}> What's my number?</Text></Text>
        </View>
        <View style={styles.InputHeader}>
          <TouchableOpacity style={styles.DropDownContainer} onPress={() => setVisibleCountry(true)}>
            <View />
            <Text style={styles.DropDownText}>{countryName}</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          <View style={styles.InputContainer}>
            <View style={styles.CountryCode}>
              <Text style={styles.CountryCodeText}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput style={styles.InputNumber} placeholder='Enter your Phone Number' />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Footer}>
        <ButtonComp title="Next" style={{ paddingHorizontal: scale(29) }} onPress={onNextButtonClick} />
      </View>
      {
        visibleCountry && (<CountryPicker visible={true}
          onClose={() => setVisibleCountry(false)}
          withFilter
          onSelect={(e: any) => {
            setCountryCode(`+ ${e.callingCode[0]}`);
            setCountryName(e.name);
          }}
        />)
      }
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(30)
  },
  Header: {
    gap: verticalScale(50)
  },
  TitleContainer: {
    gap: verticalScale(30)
  },
  MainTitleHeader: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center"

  },
  SubTitleHeader: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: 400,
    color: "balck"
  },
  linkSubTitleHeader: {
    color: "#002AC0"
  },
  InputHeader: {},
  Footer: {},
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82"
  },
  DropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20)
  },
  DropDownText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "balck"
  },
  InputContainer: {
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20)
  },
  CountryCode: {
    // gap: verticalScale()
  },
  CountryCodeText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
    paddingVertical: verticalScale(9)
  },
  InputNumber: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  }

})
