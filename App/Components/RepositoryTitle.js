import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Icon from 'react-native-vector-icons/Octicons';

import Constants from '../Utils/Constants';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Constants.REPO_TITLE_BG,
    alignItems: 'center'
  },
  avatar: {
    width: 25,
    height: 25,
    marginLeft: 15,
    borderRadius: 12.5
  },
  title: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkIcon: {
    fontSize: 20,
    marginRight: 15,
    color: Constants.THEME_ALT
  }
});

export default class RepositoryTitle extends Component {

  static propTypes = {
    details: PropTypes.object.isRequired
  };

  render() {
    const details = this.props.details;
    const avatar_url = details.owner.avatar_url || null;

    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Image style={styles.avatar} source={{uri: avatar_url}} />
          <Text style={styles.title} numberOfLines={1}>{details.full_name}</Text>
          <Icon name="check" style={styles.checkIcon} />
        </View>
      </View>
    );
  };

};