import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  CameraIcon,
} from "react-native-heroicons/outline";
import ImageCarousel from "../components/ImageCarousel";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#800000]">
      <ImageBackground
        source={require("../assets/home-bg.png")}
        className="h-full w-full mt-10"
      >
        <SafeAreaView>
          <View className="flex-row items-center justify-center mt-16 ml-32">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>
          <View className="flex-row justify-center p-24">
            <ImageCarousel />
          </View>
          <View className="items-center">
            <Image
              source={require("../assets/RuedaLibreTitle.png")}
              className="w-40 h-12 m-8"
            />
          </View>
          <View>
            <TouchableOpacity className="flex-row items-center space-x-1 mt-1 mx-1">
              <CameraIcon color="white" size={18} />
              <Text className="text-white">Rueda.Libre.LDN</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center space-x-1 mt-2 mx-1">
              <GlobeAltIcon color="white" size={18} />
              <Text className="text-white">RuedaLibre.co.uk</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
