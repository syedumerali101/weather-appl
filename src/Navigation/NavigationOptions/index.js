import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../Assets/images';
import {vw} from '../../Utils/dimensions';
import styles from './styles';

const routesWithBackIconAndTitle = {};
const routesWithBackIcon = {};
const routesWithTitle = {};
const titles = {
  HomeScreen: 'Home',
};
const routesWithImage = {};
const titlesInLeft = {};
const routesWithNotification = {};

const NavigationOptions = navProps => {
  return {
    headerTitle: () => renderTitle(navProps),
    headerRight: () => renderheaderRight(navProps),
    headerLeft: () => renderLeftTitleWithImage(navProps),
    headerBackground: () => renderHeaderBackground(navProps),
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
  };
};
export const renderHeaderBackground = props => {
  return <View style={styles.bgContainer}></View>;
};
const renderTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <View>
        <Text style={styles.titleCenterText}>{titles[props?.route?.name]}</Text>
      </View>
    );
  }
};
const renderLeftTitleWithImage = props => {
  if (routesWithBackIcon[props?.route?.name]) {
    return (
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image source={icons.back} style={styles.backIcon} />
      </TouchableOpacity>
    );
  }
  if (routesWithBackIconAndTitle[props?.route?.name]) {
    return (
      <View style={styles.titleImageContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.paymentText}>
          {routesWithBackIconAndTitle[props?.route?.name]}
        </Text>
      </View>
    );
  }
  if (titlesInLeft[props?.route?.name]) {
    return (
      <View>
        <Text style={styles.titleCenterText}>
          {titlesInLeft[props?.route?.name]}
        </Text>
      </View>
    );
  }
  // if (routesWithDrawer[props?.route?.name]) {
  //   return (
  //     <TouchableOpacity  style={styles.backIconContainer} onPress={() => props.navigation.navigate("SettingNavigator")}>
  //       <Image source={icons.menu} style={styles.iconStyle} />
  //     </TouchableOpacity>
  //   );
  // }
};

const renderheaderRight = props => {
  if (routesWithNotification[props?.route?.name]) {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('NotificationScreen')}
        style={styles.backIconContainer}>
        <Image source={icons.notification} style={styles.notificationIcon} />
      </TouchableOpacity>
    );
  }
  // if (routesWithUserImage[props?.route?.name]) {
  //   return (
  //   <View>
  //     <Image source={}/>
  //   </View>
  //   );
  // }
};

export default NavigationOptions;
