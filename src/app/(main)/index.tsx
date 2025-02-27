import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chat from '@/src/components/molecules/Chat';
import Status from '@/src/components/molecules/Status';
import Calls from '@/src/components/molecules/Calls';
import { StatusBar } from 'expo-status-bar';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Main = () => {

  const[currentPage, setCurrentPage] = useState("chat");

  const ActivePage=()=>{
    switch (currentPage) {
      case "chat":
        return <Chat />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
    
      default:
        return<Chat />;
    }
  }

  const SparrowHeader =()=> {
    return(
      <View style={styles.SparrowHeaderStyle} >
      <Text style={styles.HeaderText}>Sparrow</Text>
      <View style={styles.HeaderIconContainer}>
      <AntDesign name="search1" style={styles.HedarIcon}  />
      <Entypo name="dots-three-vertical" style={styles.HedarIcon}  />
      </View>
    </View>
    )
    
  }

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#008069" style='light' />
      <SparrowHeader />
      <View style={styles.TopBarIcon}>
        {
          ["chat","status","calls"].map((item,index)=>{
            return <TouchableOpacity key={index} onPress={()=>setCurrentPage(item)}
            style={[styles.TopBarButton,item == currentPage && {borderColor:"white"} ]}>
              <Text style={styles.TopBarText}>{item}</Text>
            </TouchableOpacity>
          })
        }
      </View>
      {ActivePage()}
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  Container:{
    flex:1
  },
  TopBarIcon:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:scale(12),
    backgroundColor:"#008069",
    gap:scale(10)
  },
  TopBarButton:{
    flex:1,
    alignItems:"center",
    borderBottomWidth:3,
    paddingBottom:verticalScale(10),
    borderColor:"#008069"
  },
  TopBarText:{
    fontSize:moderateScale(14),
    fontWeight:"bold",
    color:"white",
    textTransform:"uppercase"
  },
  SparrowHeaderStyle:{
    backgroundColor:"#008069",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:scale(15),
    paddingBottom:verticalScale(17),
    paddingTop:verticalScale(10)
  },
  HeaderIconContainer:{
    flexDirection:"row",
    gap:scale(10),
  },
  HedarIcon:{
    fontSize:moderateScale(24),
    color:"white"
  },
  HeaderText:{
    fontSize:moderateScale(20),
    fontWeight:"bold",
    color:"white"
  },
})