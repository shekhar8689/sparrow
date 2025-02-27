import { View, Text, Image, FlatList } from 'react-native'
  import React from 'react'
  import MessageCard from './MessageCard'
  import imagePath from '@/src/constants/imagePath'
  
  const Status = () => {
  
    const data = [
      {
        Image: imagePath.logo,
        name: "Shekhar Gawai",
        message: "Hi how are you?",
        time: "5:27 am",
        messageCount: 5,
      },
      {
        Image: imagePath.logo,
        name: "Shekhar Gawai",
        message: "Hi how are you?",
        time: "5:27 am",
        messageCount: 5,
      },
      {
        Image: imagePath.logo,
        name: "Shekhar Gawai",
        message: "Hi how are you?",
        time: "5:27 am",
        messageCount: "",
      },
      {
        Image: imagePath.logo,
        name: "Shubham Gawai",
        message: "where are you bhai?",
        time: "5:27 am",
        messageCount: "1",
      },
    ]
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MessageCard
              name={item?.name}
              message={item?.message}
              time={item?.time}
              image={item?.Image}
              count={item?.messageCount}
            />
          )}
        />
  
      </View>
    )
  }
  
  export default Status