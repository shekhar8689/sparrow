import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title,style,textStyle ,onPress}:any) => {
  return (
    <TouchableOpacity style={[styles.Conatiner,style,textStyle]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.Button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  Conatiner:{
    backgroundColor:"#00A884",
    width:"100%",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(10),
    borderRadius:moderateScale(4),
    alignItems:"center"
  },
  Button_text:{
    fontSize:moderateScale(14),
    color:"white"
  }
})
