import React from "react";

import { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileView}>
          <Image
            style={styles.profileImage}
            source={{ uri: this.state.feed.imgperfil }}
          />
          <Text style={styles.username}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.postImage}
          source={{ uri: this.state.feed.imgPublicacao }}
        />
        <View style={styles.postContainer}>
          <TouchableOpacity style={styles.buttonLike}>
            <Image
              style={styles.likeIcon}
              source={require("./../../img/like.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.sendIcon}
              source={require("./../../img/send.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerName}>{this.state.feed.nome}</Text>
          <Text style={styles.footerDescription}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  footerDescription: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 5,
  },
  profileView: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  username: {
    fontSize: 22,
    textAlign: "left",
    color: "#000000",
  },
  postImage: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  postContainer: {
    flexDirection: "row",
    padding: 5,
  },
  likeIcon: {
    width: 33,
    height: 33,
  },
  sendIcon: { width: 33, height: 33 },
  buttonLike: {
    marginRight: 5,
  },
});
