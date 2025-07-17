import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../../lib/supabase";

export default function Index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("test_table").select("*");
      if (error) {
        setMessage("Error: " + error.message);
      } else {
        setMessage(`Success! Found ${data.length} rows`);
      }
    };

    testConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
