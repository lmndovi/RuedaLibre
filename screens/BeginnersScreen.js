import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const BeginnersScreen = () => {
  // const navigation = useNavigation();

  return (
    <View className="">
      <View>
        <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/classes-bg.png")}
        className="h-full w-full"
      >
        <SafeAreaView>
          <View className="flex-row items-center justify-center mt-16 ml-32">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BeginnersScreen;
