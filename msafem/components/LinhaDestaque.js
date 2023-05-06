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
        address="test"
        short_description="Uma pequena descrição"
        disses={[]}
        long={0}
        lat={0}
        
        />

       
      </ScrollView>
    </View>
  )
}

export default LinhaDestaque