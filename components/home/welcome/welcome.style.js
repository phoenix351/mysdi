import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
    // backgroundColor:'#fff',
    // borderColor:"#001",
    margin: "auto",
    // position:'relative',
    // borderWidth:1,
    // padding: 10,
  }),
  homeBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  iconGrid: {
    width: "30%",
    margin: "auto",
    marginBottom: 10,
    borderRadius: 20,
    // justifyContent:'center'
  },
  iconGridContainer: {
    flex: 1,
    // flexShrink: 1,
    flexDirection: "row",
    maxHeight: "auto",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 30,
    position: "relative",
    marginTop: 10,
  },
  welcomeLogo: {
    width: 100,
    height: 100,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: "transparent",
    borderColor: "#001",
    marginBottom: 300,
    // borderWidth:1,
    padding: 100,
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 2,
    paddingLeft: 10,
  },
  sikatMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    fontWeight: "700",
    color: "#000",
    marginTop: 2,
    // paddingLeft: 10,
    textAlign: "center",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
