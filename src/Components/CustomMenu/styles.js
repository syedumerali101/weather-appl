import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    // borderColor: colors.greyBorderInput,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: vh * 1.4,
    paddingHorizontal: vw * 5,
    borderRadius: vw * 7,
    justifyContent: 'space-between',
    paddingHorizontal: vw * 3,
  },
  dropdownIcon: {
    width: vh * 2.4,
    height: vh * 2.4,
    resizeMode: 'contain',
  },
  light: {
    fontSize: 1.5 * vh,
    paddingRight: vw * 4,
    color: colors.notificationText,
    textTransform: 'capitalize'
  },
  stericText: {
    color: colors.red,
    fontSize: vh * 1.9,
  },
  dropdown: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.greyBorderInput,
    borderRadius: vh * 1.5,
    // marginTop: vh * 8,
    // height: vh*19,
    width: vw * 100,
    // paddingHorizontal: vw*0,
  },
  hrLine: {
    borderWidth: 0.2,
    marginTop: vh * 2,
    borderColor: colors.greyBorderInput,
  },
  labelText: {
    color: colors.black,
    fontSize: vh * 1.8,
    paddingLeft: vw * 3,
    paddingBottom: vh * 1,
  },
  menuItemStyle: {
    // padding:0,
    // paddingHorizontal: 0,
    // paddingVertical: 0
  },
  menuItemTextStyle: {
    color: colors.white,
    // paddingLeft: 0,
    // paddingRight: 0
  },
});
export default styles;
