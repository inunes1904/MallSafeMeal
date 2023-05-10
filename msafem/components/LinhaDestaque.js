import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestauranteCard from './RestauranteCard'

const LinhaDestaque = ({id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#94395b"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>
      <ScrollView
      horizontal contentContainerStyle={{
        paddingHorizontal:15,
      }} showsHorizontalScrollIndicator={false} className="pt-4">
        {/* Restaurantes */}

        <RestauranteCard 
        
        id = {1}
        imgUrl = "https://gkpb.com.br/wp-content/uploads/2021/10/mcdonalds-fome-de-precinho.jpg"
        title="Mc Donald's"
        rating={4.2}
        genre="Fast Food"
        short_description="Uma pequena descrição"
        disses={[]}

        />

        <RestauranteCard 
        
        id = {2}
        imgUrl = "https://tb-static.uber.com/prod/image-proc/processed_images/b459e72ad7b55ace5cefa4f09a1f2dcd/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        title="Pizza Hut"
        rating={4.5}
        genre="Fast Food"
        short_description="Uma pequena descrição"
        disses={[]}

        />    

      <RestauranteCard 
        
        id = {3}
        imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FRxIO7oagiqcOAdRAWcFtFzjG6m7RblXx3UYtdWzxG8zhvovmblcbif8E9jZjDdjq9Q&usqp=CAU"
        title="KFC"
        rating={4.1}
        genre="Fast Food"
        short_description="Uma pequena descrição"
        disses={[]}

        />  
      </ScrollView>
    </View>
  )
}

export default LinhaDestaque