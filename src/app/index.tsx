import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import DayListItem from "@component/core/DayListItem";


const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {


  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={days}
        renderItem={({ item, index }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
  },
  column: {
    gap: 10,
  },
});
