import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '@/src/constants/imagePath'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import { router } from 'expo-router'

const Terms_agree = () => {

  const onAgree =()=>{
    router.push('/(auth)/login')
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Text_Welcome}>Welcome to Sparrow</Text>
        <Image source={imagePath.welomeIcon} style={styles.Image_Icon} resizeMethod='Contain' />
        <Text style={styles.Text_Description}>Read our <Text style={styles.Link_Text}>Privacy Policy.</Text> Tap "Agree and Continue" to accept the <Text style={styles.Link_Text}>Teams of Services</Text></Text>
        <View style={{width:moderateScale(300)}}>
          <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
        </View>
      </View>
      <View style={styles.Footer}>
        <Text style={styles.Text_From}>From</Text>
        <Text style={styles.Text_Shekhar}>Shekhar</Text>
      </View>
    </SafeAreaView>
  )
}

export default Terms_agree

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(35),
    gap: verticalScale(70)
  },
  Header: {
    alignItems: "center",
    gap: verticalScale(30)
  },
  Footer: {
    alignItems: "center"
  },
  Text_From: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  Text_Shekhar: {
    fontSize: moderateScale(15),
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  Text_Welcome: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
    marginBottom:verticalScale(20)
  },
  Image_Icon: {
    height: moderateScale(250),
    width: moderateScale(250),
    borderRadius: moderateScale(250),
    borderColor: "red"
  },
  Text_Description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "black",
  },
  Link_Text: {
    color: "#0C42CC"
  }
})
