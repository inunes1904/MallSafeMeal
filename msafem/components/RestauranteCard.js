import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import { Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import {ClockIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestauranteCard = ({
    id,
    imgUrl,
    title,
    pontuacao,
    genre,
    breve_descricao,
    pratos,

}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-sm">
      <Image 
      source={{uri: urlFor(imgUrl).url()}}
      className="h-36 w-64 rounde-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">
            {title}
        </Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="#94395b" size={22} opacity={0.8} />
            <Text className="text-xs text-gray-500">
                <Text style={{
                    color:"#94395b"
                }}> {pontuacao}</Text> • {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <ClockIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Tempo médio • 7 minutos</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestauranteCard