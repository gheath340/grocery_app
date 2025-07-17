import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../../lib/supabase";

export default function Index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
  const testConnection = async () => {
    try {
      const { data, error } = await supabase.from("test_table").select("*");
      if (error) {
        console.log("Supabase Error:", error);
        setMessage("Error: " + error.message);
      } else {
        console.log("Supabase Data:", data);
        setMessage(`Success! Found ${data.length} rows`);
      }
    } catch (err: any) {
      console.log("Catch Error:", err);
      setMessage("Catch Error: " + err.message);
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
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
