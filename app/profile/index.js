import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
} from 'react-native';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import styles from './profile.style';
import { COLORS, icons, SIZES, images, FONT } from '../../constants';
import useFetch from '../../hooks/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: '',
        }}
      />

      <>
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <Image source={images.profile} style={styles.logoImage} />
          </View>

          <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitle}>Anupam</Text>
          </View>

          <View style={styles.companyInfoBox}>
            <Text style={styles.companyName}>Barclays / </Text>
            <View style={styles.locationBox}>
              <Image
                source={icons.location}
                resizeMode='contain'
                style={styles.locationImage}
              />
              <Text style={styles.locationName}>Pune</Text>
            </View>
          </View>
        </View>
      </>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeadText}>About me:</Text>

          <View style={styles.aboutContentBox}>
            <Text style={styles.aboutContextText}>
              I'm a B.E. Electrical and Electronics Engineer graduate from Birla
              Institute of Technology and Science, Pilani, graduated in 2022
              .Being fascinated by software and websites, I started practicing
              web development in my freshman years.I love solving problems with
              JavaScript and creating tools for other developers.For the last
              four years, I have been actively working as a software developer
              gained substantial command over various web development
              frameworks.I am very much fond of writing clean, well documented
              and tested code and likes to spend time in improving the projects
              I have developed in the recent past. Always up for a cup of
              coffee!
            </Text>
          </View>
        </View>
        <View style={{ marginTop: SIZES.large }}>
          <Text
            style={{
              fontFamily: FONT.knuckle,
              fontSize: SIZES.xxLarge,
              color: COLORS.primary,
            }}
          >
            BizLinker
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
