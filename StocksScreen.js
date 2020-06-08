import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  state,
  setState /* include other react-native components here as needed */,
  Button,
} from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import { scaleSize } from "../constants/Layout";

// FixMe: implement other components and functions used in StocksScreen here (don't just put all the JSX in StocksScreen below)

export default function StocksScreen({ route }) {
  const { ServerURL, watchList } = useStocksContext();
  const [state, setState] = useState({});

  // can put more code here

  useEffect(() => {
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state
  }, [watchList]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>symbol</Text>
        <Text>symbol</Text>
        <Text>symbol</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  // FixMe: add styles here ...

  // use scaleSize(x) to adjust sizes for small/large screens
});
