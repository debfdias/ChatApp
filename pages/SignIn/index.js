import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

function SignInScreen(props) {
  const [state, setState] = useState({ username: "" });
  const { username } = state;

  const handleLogin = () => {
    props.navigation.navigate("Chat", { username });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageBox}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Bubbles-alt-icon.png",
          }}
        />
      </View>
      <View style={styles.data}>
        <Text style={styles.username}>Nickname</Text>
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          onChangeText={(username) => setState({ ...state, username })}
          value={state.username}
        />
      </View>
      <View style={styles.arrowButton}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={handleLogin}
        >
             <Ionicons name="ios-arrow-forward" size={50} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInScreen;
