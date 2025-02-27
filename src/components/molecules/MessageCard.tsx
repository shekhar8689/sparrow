import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({name,message,time,count,image}:any) => {
    return (
        <TouchableOpacity style={styles.Button}>
            <View style={styles.LeftContainer}>
                <Image source={image} style={styles.Image} />
                <View>
                    <Text style={styles.Name}> {name}</Text>
                    <Text style={styles.Message}>{message}</Text>
                </View>
            </View>
            <View style={styles.RightContainer}>
                <Text style={styles.Time}>{time}</Text>
                {
                    count && <View style={styles.MessageCountCounter}>
                    <Text style={styles.MessageCount}>{count}</Text>
                </View>
                }
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:scale(20),
        paddingVertical:verticalScale(15),
    },
    Image: {
        height: moderateScale(53),
        width: moderateScale(53),
        borderRadius: moderateScale(53),
    },
    Name: {
        fontWeight: "bold",
        fontSize: moderateScale(14),
        color: "black"
    },
    Message: {
        fontWeight: "500",
        fontSize: moderateScale(13),
        color: "#889095"
    },
    Time: {
        fontWeight: "bold",
        fontSize: moderateScale(12),
        color: "#998E8E"
    },
    MessageCountCounter: {
        backgroundColor: "#036A01",
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: moderateScale(22),
        justifyContent: "center",
        alignItems:"center"

    },
    MessageCount: {
        color:"white",
        fontSize:moderateScale(12)
    },
    LeftContainer: {
        flexDirection:"row",
        alignItems:"center",
        gap:scale(10)
    },
    RightContainer: {
        alignItems:"flex-end",
        gap:verticalScale(7)
    },

})


export default MessageCard