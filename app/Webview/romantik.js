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

  onShouldStartLoadWithRequest = (event) => {
    const url = event.url.toLowerCase();
    if (request.url.endsWith(".pdf")) {
      // Handle the download yourself
      // For example, you can use a library like react-native-fs to download the PDF file
      // You can also show a custom UI to prompt the user to download the file
      // Return false to prevent the WebView from loading the URL
      return false;
    }
    return true;
  };

  render() {
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
            headerTitle: "Romantik",
          }}
        />

        {isLoading && <LoadingScreen />}
        <WebView
          source={{ uri: "https://romantik.web.bps.go.id" }}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoadStart={() => this.setState({ isLoading: true })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        />
      </>
    );
  }
}
