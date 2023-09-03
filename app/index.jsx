import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES,FONT } from '../constants';

import {
  ScreenHeaderBtn,
  Welcome,
  Popularjobs,
  Nearbyjobs,
} from '../components';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleProfileClick = () => {
    router.push(`/profile`);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white},
          headerShadowVisible: false,
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' handlePress={handleProfileClick}/>;
          },
          headerTitle:()=>{
            return  <Text style={{fontFamily:FONT.knuckle,fontSize:SIZES.large,color:COLORS.primary}}>BizLinker</Text>
          },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
           searchTerm={searchTerm}
           setSearchTerm={setSearchTerm}
           handleClick={() => {
             if (searchTerm) {
               router.push(`/search/${searchTerm}`)
             }
           }} 
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
