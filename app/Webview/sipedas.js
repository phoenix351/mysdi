import React, { Component } from "react";
import { BackHandler, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { Stack } from "expo-router";

import { COLORS } from "../../constants";
import { LoadingScreen } from "../../components";

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
    this.state = { isLoading: false };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.WEBVIEW_REF.current.goBack();
    return true;
  };

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  render() {
    //    const {name,key,websiteUrl} =params;
    //    console.log({params});
    const { isLoading } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: true,
            headerShown: true,
            // headerLeft: ()=>(
            //   <ScreenHeaderBtn iconUrl={images.logo} dimension="100%"/>
            // ),
            headerTitle: "Sipedas Mantap!",
          }}
        />

        {isLoading && <LoadingScreen />}
        <WebView
          source={{ uri: "sipedas.monitoringbps.com" }}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoadStart={() => this.setState({ isLoading: true })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        />
      </>
    );
  }
}
