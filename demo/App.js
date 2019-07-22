import React from 'react';
import { Text as RnText, View as RnView } from 'react-native';
import widthAcss, {
  Text, View, ImageBackground, Image,
} from './packages/withAcss';
import mImg1 from './assets/1.jpg';
import mImg2 from './assets/2.jpg';


const CusText = widthAcss(RnText);
const CusView = widthAcss(RnView);

export default function App() {
  return (
    <View bc="#f5f5f5" pt={100} ph={30} h="100%">
      <View mb={16} aic>
        <Image br={32} w={64} h={64} source={mImg1} />
      </View>
      <Text c="#ffffff" p={16} bc="#4c5fe2" tac mb={16}>Hello world!</Text>
      <ImageBackground source={mImg2} mb={40}>
        <View bc="rgba(255,255,255,.8)">
          <Text fs={40} lh={100} tac fwb c="#4c5fe2">Hello Again!</Text>
        </View>
      </ImageBackground>
      <CusView bc="#4c5fe2" p={16}>
        <CusText tac c="#ffffff">Custom text</CusText>
      </CusView>
    </View>
  );
}
