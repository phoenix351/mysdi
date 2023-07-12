import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
    // this.params = useLocalSearchParams();
    // console.log(params)

  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  render() {
//    const {name,key,websiteUrl} =params;
//    console.log({params});
    return (
      <WebView
        source={{ uri: "https://monitoringbps.com/web" }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
      />
    )
  }
}