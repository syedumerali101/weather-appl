import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';

const styles = StyleSheet.create({
  // userImage: {
  //   height: vh * 5.5,
  //   width: vw * 10,
  //   // borderRadius: (vh*6.5)/2,
  //   resizeMode: 'cover',
  //   // backgroundColor: "red"
  //   // marginLeft: vw*5,
  // },
  bgContainer: {
    backgroundColor: colors.headerBackground,
    flex: 1,
    // height: vh * 15,
    // justifyContent: 'flex-end',
  },
  notificationIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  // bgInnerContainer:{
  //   width: "21%",
  //   height: vh*8,
  //   backgroundColor: colors.white,
  //   bottom: -vh*3.5,
  //   left: "39%",
  //   borderRadius: vh*10,
  //   transform: [{ scaleX: 4.9 }, { scaleY:0.7 }],
  //   justifyContent: "flex-end"

  //   // bottom: 0
  // },
  // circle:{
  //   // backgroundColor: "red",
  //   height: vh*5,
  //   backgroundColor: "transparent"
  // },
  titleCenterText: {
    fontSize: vh * 2.2,
    color: colors.white,
  },
  iconStyle: {
    height: vh * 1.7,
    width: vh * 1.7,
    resizeMode: 'contain',
  },
  imgContainer: {
    borderRadius: (vh * 5.5) / 2,
    overflow: 'hidden',
  },
  userNameText: {
    fontSize: vh * 1.75,
    color: colors.black,
    // marginLeft: vw*5.5,
  },
  titleText: {
    fontSize: vh * 1.85,
    color: colors.black,
  },
  paymentText: {
    color: colors.white,
    paddingLeft: vw * 6,
    fontSize: vh * 2.1,
  },
  titleImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconContainer: {
    backgroundColor: colors.white,
    padding: vh * 1.2,
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: vh * 3,
  },
  backIcon: {
    height: vh * 1.22,
    width: vh * 1.22,

    resizeMode: 'contain',
    // tintColor: colors.black
  },

  iconsContainer: {
    flexDirection: 'row',
    // width: vw*20,
    // justifyContent: "space-between"
  },
  iconSpacing: {
    marginLeft: vw * 5,
  },
});
export default styles;
