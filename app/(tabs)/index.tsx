import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
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
  <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 items-center justify-center">
      {/* <Text className="text-lg text-black">{message}</Text> */}
    </View>
  </SafeAreaView>
);
}
