import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestauranteCard from './RestauranteCard'
import { client } from '../sanity'


const LinhaDestaque = ( {id, title, description}  ) => {

  const [restaurantesDestaque, setRestaurantesDestaque] = useState([]);

  useEffect( () => {
    
    client.fetch(   
      `
      *[ _type == "destaque" && _id == $id ]{
        ...,
        restaurantes[]->{
          ...,
          pratos[]->,
          type-> {
            name
          }
        },
      }[0]
      `, {id}).then( data => {
        setRestaurantesDestaque(data);
      })
  }, [])
  
  console.log(restaurantesDestaque)
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
     
      {restaurantesDestaque?.map( RestauranteCard => (

          <RestauranteCard 
        
          key={RestauranteCard._id}
          id={RestauranteCard._id}
          imgUrl={RestauranteCard.imagem}
          title={RestauranteCard.name}
          pontuacao={RestauranteCard.pontuacao}
          breve_descricao={RestauranteCard.breve_descricao}
          genre={RestauranteCard.tipo}
          pratos={RestauranteCard.pratos}

          />
        
        
      ))}

      </ScrollView>
    </View>
  )
}

export default LinhaDestaque