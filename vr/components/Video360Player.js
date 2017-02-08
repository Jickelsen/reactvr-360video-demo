import React from 'react';
import {
  asset,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-vr';

const video360Module = NativeModules.Video360Module;

export default class Video360Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoIsPlaying: false};
  }
  render() {
    return (
      <View
        style={[{
          layoutOrigin: [0.5, 0, 0],
          alignItems: 'center',
        }, this.props.style]}>
        <VrButton
          style={{
            backgroundColor: this.state.videoIsPlaying?'red':'green',
            borderRadius: 0.05,
            margin: 0.05,
          }}
          onEnter={()=>{this.setState({btnColor: this.state.cubeColor})}}
          onExit={()=>{this.setState({btnColor: 'white'})}}
          onClick={()=>{
              // Asynchronous call to custom native module
              if (this.state.videoIsPlaying) {
                video360Module.pauseVideo();
              }
              else {
                video360Module.loadVideo(this.props.source);
                video360Module.playVideo();
              }
              this.setState({videoIsPlaying: !this.state.videoIsPlaying});
            }}>
          <Text style={{
            fontSize: 0.15,
            paddingTop: 0.025,
            paddingBottom: 0.025,
            paddingLeft: 0.05,
            paddingRight: 0.05,
            textAlign:'center',
            textAlignVertical:'center',
          }}>
            {this.state.videoIsPlaying?'Stop Playback':'Start Playback'}
          </Text>
        </VrButton>
      </View>
    );
  }
};
