import { View, SafeAreaView, Text, Image, TextInput, ScrollViewBase, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo100x100.png';
import {UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/solid";
import { Categorias } from '../components/Categorias';
import LinhaDestaque from '../components/LinhaDestaque';
import sanityClient from '../sanity';



 
const HomeScreen = () => {
    const navigation = useNavigation();

    // Trazer informação do Backend 
    const [destaqueCategorias, setDestaqueCategorias] = useState([]);
    

    // Permite alterar o Default Header da aplicação
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        });
        
    }, []);

    // Corre quando o componente é carregado
    useEffect(()=>{
      // Querie que irá trazer todos os destaques, restaurantes e os seus pratos
      sanityClient.fetch (
          `
          *[_type == "destaque"] {
            ...,
            restaurantes[]->{
              ...,
              pratos[]->
            }
          }
          `
        ).then( data => {
          setDestaqueCategorias(data);
        })
    }, [])
    //console.log(destaqueCategorias) //imprimir destaques
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Visualização Cabeçalho */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
                source={logo}
                className="h-14 w-14 p-4 rounded-full"
        />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Entregar Agora</Text>
        <Text className="font-bold text-l">Localização da Mesa
        <ChevronDownIcon size={16} color="#94395b"/>
        </Text>
      </View>
      <UserIcon size={35} color="#94395b"/>
      </View>
      {/* Visualização Pesquisa */}
        <View className="flex-row items-center space-x-2  mx-4  py-1">
            <View className="flex-row space-x-2  flex-1 bg-gray-200 p-3 py-2">
             <MagnifyingGlassIcon color="#94395b" size={20} />
            <TextInput placeholder='Restaurantes disponíveis' keyboardType='default' />
              
            </View>
            <AdjustmentsVerticalIcon  color="#94395b"/>
        </View>
      {/* Visualização Scroll Restaurantes */}
      {/* Corpo da app */}
      <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom:100,

      }}
      >
        {/* Categorias */}
        <Categorias  />
        
        {/* linhas de destaques  */} 
        {/* Uma das possibilidades seria promover os 
            melhores restaurantes aos clientes cobrando algo por isso */} 

        {destaqueCategorias?.map(categoria => (
          
          <LinhaDestaque 
          key={categoria._id}
          id={categoria._id}
          title={categoria.name}
          description={categoria.breve_descricao}
         />
          ))}

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen   