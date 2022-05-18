import React from 'react';
import {
  View ,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import succesImg from '../../assets/success.png';
import { CopyRight } from '../CopyRight';

import { styles } from "./styles";

interface Props {
  onSendingAnotherFeedback: () => void;
}

export function Success({ onSendingAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={succesImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos seu feedback!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSendingAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <CopyRight />
    </View>
  )
}