import React from "react";

import { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data,
    };

    this.like = this.like.bind(this);
    this.showLikes = this.showLikes.bind(this);
  }

  showLikes(likers) {
    if (likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likesText}>
        {likers} {likers > 1 ? "curtidas" : "curtida"}
      </Text>
    );
  }

  like() {
    let feed = this.state.feed;

    if (feed.likeada) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed?.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed?.likers + 1,
        },
      });
    }
  }

  getLikeIcon(likeada) {
    if (likeada) return require("./../../img/likeada.png");
    else return require("./../../img/like.png");
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
          <TouchableOpacity onPress={this.like} style={styles.buttonLike}>
            <Image
              style={styles.likeIcon}
              source={this.getLikeIcon(this.state.feed.likeada)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.sendIcon}
              source={require("./../../img/send.png")}
            />
          </TouchableOpacity>
        </View>
        {this.showLikes(this.state.feed.likers)}
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
  likesText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
