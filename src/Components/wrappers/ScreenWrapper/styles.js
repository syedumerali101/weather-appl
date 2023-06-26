import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../Utils/appTheme';
import {vh, vw} from '../../../Utils/dimensions';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw * 4,
    paddingTop: vh * 4,
    backgroundColor: colors.white,
  },
});
export default styles;
