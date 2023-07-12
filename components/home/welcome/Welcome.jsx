import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground

} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, images, SIZES } from '../../../constants';

const GridLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);

const Welcome = () => {
  const router = useRouter();
  const websites = [
    { key: 0, name: "Romantik", namaFile: 'romantik', logoPath: images.romantik },
    { key: 1, name: "Sipedas Mantap!", namaFile: 'sipedas', logoPath: images.sipedas },
    { key: 3, name: "Silastik", namaFile: 'silastik', logoPath: images.silastik },
    { key: 4, name: "Forum Data Online", namaFile: 'fordone', logoPath: images.fordone },
    { key: 5, name: "Website BPS Sulut", namaFile: 'bpsSulut', logoPath: images.bps },
    { key: 6, name: "Indonesia Data Hub", namaFile: 'indah', logoPath: images.indah },
  ];



  return (
    <ImageBackground
      source={images.home_image}
      style={{ justifyContent: 'center', alignItems: 'center', padding: 0, height:950 }}
    >
      <View>
        <View style={styles.container}>
          <View style={{ backgroundColor: 'transparent', alignItems: 'center',marginLeft:30,marginTop:30 }}>

            <Image
              source={images.logo}
              resizeMode='contain'
              style={{ width: 150, height: 150, aspectRatio: 1, marginBottom: 0, justifyContent: 'center' }}
            />
          </View>


        </View>
        <View style={{ marginLeft: 30, marginBottom:130 }}>

          <Text style={styles.welcomeMessage}>Selamat datang,</Text>
          <Text style={styles.welcomeMessage}>di Portal MySDI</Text>
        </View>
        <View style={[styles.iconGridContainer]}>
          {websites.map(({ key, name, namaFile, logoPath }) => (
            <TouchableOpacity
              key={key}
              onPress={() => router.push(`Webview/${namaFile}`)}
              style={[styles.iconGrid]}
            >
              <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>

                <Image
                  source={logoPath}
                  resizeMode='contain'
                  style={{ width: 70, height: 70, aspectRatio: 1, marginBottom: 10, justifyContent: 'center' }}
                />
              </View>
              <Text style={{ textAlign: 'center' }}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>

  )
}

export default Welcome