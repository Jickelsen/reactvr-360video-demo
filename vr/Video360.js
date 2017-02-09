/*
  360 Video three.js scene config
  Copyright Jacob Michelsen 2017 chromegadget@gmail.com
  Distributed under the MIT License http://opensource.org/licenses/MIT
  original three.js scene setup from http://codepen.io/kevinleclair1/pen/gPdqqp
*/

import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import * as THREE from 'three';

export default function Video360ModuleSetup(scene) {

  // Create a scene so we can add to it; otherwise the VRInstance creates one.

  // Create Native Module so React context can modify native (Three.js)
  const video360Module = new Video360Module();


  var video      = document.createElement('video');
  video.crossOrigin = '';
  videoTexture = new THREE.Texture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;


  // Give video360Module a handle to our video.
  video360Module.init(video);

  var sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  var sphereMat = new THREE.MeshBasicMaterial({map: videoTexture});
  sphereMat.side = THREE.BackSide;
  var sphere = new THREE.Mesh(sphereGeometry, sphereMat);
  scene.add(sphere);

  return {video360Module, video360Render: renderFunction(video)};

}

function renderFunction(video) {
  // Custom per-frame updates go here.
  return (timestamp) => {
    const seconds = timestamp / 1000;

    if( video.readyState === video.HAVE_ENOUGH_DATA ){
      videoTexture.needsUpdate = true;
    }
  };
};

class Video360Module extends Module {
  // Video360Module is a React Native Module, which implements functionality
  // that can be called asynchronously across the React Native brige.

  // Constructor calls super() with one argument: module name.
  constructor() {
    super('Video360Module');
  }

  // Called directly after the module is created.
  init(video) {
    this.video = video;
  }

  loadVideo(source) {
    this.video.src = source;
    this.video.load();
    console.log("Loaded video", source);
  }

  playVideo() {
    this.video.play();
  }

  pauseVideo() {
    this.video.pause();
  }

}
