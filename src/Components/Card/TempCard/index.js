import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TempCard = props => {
  return (
    <View>
      <Text style={styles.titleText}>{props.heading}</Text>
      <Text style={styles.descText}>{props.description}</Text>
      <Text style={styles.descText}>{props.description2}</Text>
    </View>
  );
};
export default TempCard;
