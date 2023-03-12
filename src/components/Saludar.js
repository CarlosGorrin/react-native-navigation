import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function Saludar(props) {
    const { firstname, lastname } = props;
  return (
    <View>
      <Text>Hello {firstname} {lastname}</Text>
    </View>
  )
}

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}