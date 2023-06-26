import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import TempCard from '../../Components/Card/TempCard';
import CustomMenu from '../../Components/CustomMenu';
import ScreenWrapper from '../../Components/wrappers/ScreenWrapper';
import {cities, colors} from '../../Utils/appTheme';
import useController from './controller';
import styles from './styles';

const HomeScreen = () => {
  const {dropdown, setDropdown, weatherUpdate, isLoading} = useController();
  const weatherData = [
    {
      id: 1,
      heading: 'Weather',
      description: weatherUpdate?.weather && weatherUpdate?.weather[0]?.main,
    },

    {
      id: 2,
      heading: 'Temperature',
      description: weatherUpdate?.main?.temp,
    },

    {
      id: 3,
      heading: 'Visiblity',
      description: weatherUpdate?.visibility,
    },

    {
      id: 4,
      heading: 'Visiblity',
      description: `Speed: ${weatherUpdate?.wind?.speed}`,
      descripton2: `Degree: ${weatherUpdate?.wind?.deg}`,
    },
  ];
  return (
    <ScreenWrapper>
      <CustomMenu
        testId={'CustomMenu'}
        dropdownValue={dropdown}
        items={cities}
        placeholder={dropdown ? dropdown : 'Select City'}
        setDropdownValue={setDropdown}
      />
      {isLoading ? (
        <ActivityIndicator size={20} color={colors.appBlue} />
      ) : (
        <View>
          <Text style={styles.cityName}>{weatherUpdate?.name}'s Weather</Text>
          {weatherData?.map((item, index) => (
            <TempCard
              key={index + item?.id}
              heading={item?.heading}
              description={item?.description}
              descripton2={item?.descripton2}
            />
          ))}
        </View>
      )}
    </ScreenWrapper>
  );
};
export default HomeScreen;
