import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { COLORS, icons, images, SIZES } from "../../../constants";

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
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const Welcome = () => {
  const router = useRouter();
  const websites = [
    {
      key: 0,
      name: "Romantik",
      namaFile: "romantik",
      logoPath: images.romantik,
    },
    {
      key: 1,
      name: "Sipedas Mantap!",
      namaFile: "sipedas",
      logoPath: images.sipedas,
    },
    {
      key: 3,
      name: "Silastik",
      namaFile: "silastik",
      logoPath: images.silastik,
    },
    {
      key: 4,
      name: "Forum Data Online",
      namaFile: "fordone",
      logoPath: images.fordone,
    },
    {
      key: 5,
      name: "Website BPS Sulut",
      namaFile: "bpsSulut",
      logoPath: images.bps,
    },
    {
      key: 6,
      name: "Gradasi TKDN",
      namaFile: "gradasi",
      logoPath: images.gradasi,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        zIndex: 10000,
      }}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: 30,
            marginTop: 0,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              flex: 1,
              position: "relative",
              left: 0,
              width: 150,
              height: 150,
              aspectRatio: 1,
              marginBottom: 0,
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: 30, marginBottom: 90 }}>
        <Text style={styles.welcomeMessage}>Selamat datang,</Text>
        <Text style={styles.welcomeMessage}>di Portal MySDI</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          margin: 10,
          borderRadius: 30,
          zIndex: 1000,
          shadowColor: "#000",
          elevation: 5,
        }}
      >
        <View style={{ marginTop: 0 }}>
          <Text style={styles.sikatMessage}>
            <Text style={{ color: COLORS.orange }}>SI</Text>
            <Text style={{ color: COLORS.blue }}>K</Text>
            <Text style={{ color: COLORS.green }}>AT</Text> &nbsp;
            <Text style={{ color: COLORS.red }}>DATA</Text>
          </Text>
          <Text style={styles.sikatMessage}>
            "KOLABORA<Text style={{ color: COLORS.orange }}>SI</Text> PENTAHELIX
          </Text>
          <Text style={styles.sikatMessage}>UNTUK MEWUJUDKAN</Text>
          <Text style={styles.sikatMessage}>
            {" "}
            <Text style={{ color: COLORS.blue }}>K</Text>
            UALITAS S<Text style={{ color: COLORS.green }}>AT</Text>U{" "}
            <Text style={{ color: COLORS.red }}>DATA</Text>"
          </Text>
        </View>
        <View style={[styles.iconGridContainer]}>
          {websites.map(({ key, name, namaFile, logoPath }) => (
            <TouchableOpacity
              key={key}
              onPress={() => router.push(`Webview/${namaFile}`)}
              style={[styles.iconGrid]}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                <Image
                  source={logoPath}
                  resizeMode="contain"
                  style={{
                    width: 70,
                    height: 70,
                    aspectRatio: 1,
                    marginBottom: 10,
                    justifyContent: "center",
                  }}
                />
              </View>
              <Text style={{ textAlign: "center" }}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Welcome;
