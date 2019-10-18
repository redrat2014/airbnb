import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';


export default class InputField extends Component {
  render() {
     const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle } = this.props;
     const fontSize = labelTextSize || 14;
     const color = labelColor || colors.white;
     const inputColor = textColor || colors.white;
     const borderBottom = borderBottomColor || 'transparent';
     return(
         <View style={[customStyle, styles.wrapper]}>
             <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
             <TextInput 
                autoCorrect={false}
                style={[{color: inputColor, borderBottomColor: borderBottom}, styles.InputField]}
                secureTextEntry={inputType === 'password'}
             />
         </View>
     );
  }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
   wrapper: {
    
   },
   label: {
    fontWeight: '700',
    marginBottom: 10,
   },
   InputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingTop: 5,
    paddingBottom: 5,
   },
});