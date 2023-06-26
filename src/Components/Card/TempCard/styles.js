import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils/appTheme';
import {vh} from '../../../Utils/dimensions';

const styles = StyleSheet.create({
  titleText: {
    marginTop: vh * 2,
    color: colors.appBlue,
    fontSize: vh * 2.3,
  },
  descText: {
    color: colors.blackText,
    fontSize: vh * 1.8,
    marginTop: vh * 0.5,
  },
});
export default styles;
