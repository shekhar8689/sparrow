import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import OTPInput from "@codsod/react-native-otp-input";
import { storeData } from '@/src/utils/utils';


const Verify_otp = () => {

  const [otp, setOTP] = useState("");
  const onPress =()=>{
    console.log(otp);
    storeData.set("access_token", "dkjhfskjdfhksj");
  }

  return (
    <SafeAreaView style={styles.Cotainer}>
      <View style={styles.Header}>
      <AntDesign name="arrowleft" size={24} color="black" style={styles.BackButton} />
      <Text style={styles.HeaderTitle}> Enter OTP Code</Text>
      </View>
      <View style={styles.Body}>
        <Text style={styles.OtpSendText}>Code has been send to +91 11******85</Text>
        <OTPInput length={4} onOtpComplete={(txt: string) => setOTP(txt)} style={styles.OtpContainer} inputStyle={styles.OtpInputStyle} />
        <Text style={styles.ResendText}>Resend code in <Text style={styles.CounterText}>56</Text> s </Text>
      </View>
      <View style={styles.Footer}>
        <ButtonComp title="Verify" onPress ={onPress} style={styles.VerifyButtton} />
      </View>
    </SafeAreaView>
  )
}
 
export default Verify_otp

const styles = StyleSheet.create({
  Cotainer:{
    padding:moderateScale(20),
    flex:1,
    justifyContent:"space-between",
    paddingTop:verticalScale(30)

  },

  Header:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(10)
  },
  BackButton:{
    fontSize:moderateScale(24),
    color:"black",
    fontWeight:"bold"
  },
  HeaderTitle:{
    fontSize:moderateScale(24),
    color:"black",
    fontWeight:"bold"
  },

  Body:{
    alignItems:"center",
    gap:verticalScale(25)
  },
  OtpSendText:{
    fontSize:moderateScale(16),
    fontWeight:"400"
  },

  OtpInputStyle:{
    borderColor:"black",
    borderRadius:moderateScale(15),
    height:verticalScale(50),
    width:scale(50)
    
  },

  OtpContainer:{
    gap:scale(10),
  },

  ResendText:{},
  
  CounterText:{
    color:"#00A884",
  },

  Footer:{}, 
  VerifyButtton:{
    borderRadius:moderateScale(30)
  }

})
