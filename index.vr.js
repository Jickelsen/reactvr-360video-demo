import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  NativeModules,
} from 'react-vr';

import Video360Player from './vr/components/Video360Player';

class RRMeetupWinter17 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoIsPlaying: false};
  }
  render() {
    return (
      <View>
        {/* <Pano source={asset('chess-world.jpg')}/> */}
          <Video360Player
            style={{transform:[{translate: [0, 0, -3]}]}}
            source={asset('360balloonsshort.mp4').uri}
          />
          <Video360Player
            style={{transform:[{translate: [0, 0, -3]}]}}
            source={asset('360mountainsshort.mp4').uri}
           />
      </View>
    );
  }
};

AppRegistry.registerComponent('RRMeetupWinter17', () => RRMeetupWinter17);
