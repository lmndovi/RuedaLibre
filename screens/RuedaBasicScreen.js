import { View, Text } from "react-native";
import React from "react";

const RuedaBasicScreen = () => {
  return (
    <View className="">
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

export default RuedaBasicScreen;
