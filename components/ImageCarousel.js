import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const ImageCarousel = () => {
  //   const images = [
  //     "../assets/ameliaygunda.jpg",
  //     "../assets/big3.jpg",
  //     "../assets/isaacyjessie.jpg",
  //     "../assets/joannayisaac.jpg",
  //     "../assets/joy.jpg",
  //     "../assets/mo.jpg",
  //     "../assets/moyquincy.jpg",
  //     "../assets/nightrueda.jpg",
  //     "../assets/rueda.jpg",
  //   ];

  return (
    <View>
      <ScrollView horizontal className="w-96">
        <Image
          source={require("../assets/big3.jpg")}
          className="h-72 w-96 rounded-md shadow-md"
        />
        <Image
          source={require("../assets/rueda.jpg")}
          className="h-64 w-96 rounded-md shadow-md"
        />
        <Image
          source={require("../assets/moyquincy.jpg")}
          className="h-64 w-96 rounded-md shadow-md"
        />
        <Image
          source={require("../assets/joy.jpg")}
          className="h-64 w-96 rounded-md shadow-md"
        />
        <Image
          source={require("../assets/nightrueda.jpg")}
          className="h-64 w-96 rounded-md shadow-md"
        />
      </ScrollView>
    </View>
  );
};

export default ImageCarousel;
