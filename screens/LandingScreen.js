import { View, Text, ImageBackground, SafeAreaView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const LandingScreen = () => {
  return (
    <View>
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
          <View className="items-center">
            <Text className="text-white text-3xl font-extrabold uppercase mt-3">
              Classes
            </Text>
          </View>
          <View className="items-center">
            <View className="items-center space-y-1">
              <Text className="text-white text-2xl font-bold mt-8">
                Beginners
              </Text>
              <Text className="text-white italic">
                Requirements: Good Vibes
              </Text>
            </View>
            <TouchableOpacity className="items-center space-y-1">
              <Text className="text-white text-2xl font-bold mt-8">
                Intro to Rueda
              </Text>
              <Text className="text-white italic">
                Requirements: Basic Cuban Salsa Steps
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center space-y-1">
              <Text className="text-white text-2xl font-bold mt-8">
                Rueda Basics
              </Text>
              <Text className="text-white italic">
                Requirements: Dile Que No, Dame, Enchufla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center space-y-1">
              <Text className="text-white text-2xl font-bold mt-8">
                Rueda Plus
              </Text>
              <Text className="text-white italic w-72">
                Requirements: Setenta, Sombrero, Ochenta, Pa Tin, Cubanita
              </Text>
            </TouchableOpacity>
            <Text className="text-[#daa520] text-sm font-semibold mt-9">
              Click classes for more details
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;
