import { ScrollView, } from 'react-native'
import React, { Component } from 'react'
import CardCategoria from './CardCategoria'

export class Categorias extends Component {
  render() {
    return (
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {/* CardCategoria */}
      <CardCategoria title="FastFood" 
      imgUrl="https://medien.tophotel.de/uploads/2022/03/Food-Zoom-2022_web.jpg" />
      <CardCategoria title="Carne"
      imgUrl="https://discoverbelleville.ca/wp-content/uploads/2020/08/foodBanner-758x439.jpg" />
      <CardCategoria title="Sushi"
       imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/17/e8/57/1d/um-dos-nossos-menus-de.jpg"/>
       <CardCategoria title="Pizza"
       imgUrl="https://www.nit.pt/wp-content/uploads/2017/09/e4da3b7fbbce2345d7772b0674a318d5-29.jpg"/>
        <CardCategoria title="Massas"
       imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RJPPKhPNsYQrwIr1QixZ3QXl7LNIwWmmbw&usqp=CAU"/>
        <CardCategoria title="Saudável"
       imgUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-para-almoco-saudavel.png"/>
      </ScrollView> 
    )
  }
}

export default Categorias