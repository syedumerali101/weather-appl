import {Menu, MenuItem} from 'react-native-material-menu';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import RippleHOC from '../wrappers/Ripple';
import {icons} from '../../Assets/images';

const CustomMenu = props => {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const onPressItem = item => {
    props.setDropdownValue(item);
    hideMenu();
  };

  return (
    <View>
      <Menu
        visible={visible}
        anchor={
          <View>
            <Text style={styles.labelText}>
              Select City
              <Text style={styles.stericText}>*</Text>
            </Text>
            <RippleHOC
              onPress={showMenu}
              style={[styles.menuContainer, props.style]}>
              <Text style={styles.light}>{props.placeholder}</Text>
              <Image source={icons.downward} style={styles.dropdownIcon} />
            </RippleHOC>
          </View>
        }
        onRequestClose={hideMenu}>
        {props.items?.map((value, index) => {
          return (
            <MenuItem key={index} onPress={() => onPressItem(value)}>
              {value}
            </MenuItem>
          );
        })}
      </Menu>
    </View>
  );
};

export default CustomMenu;
