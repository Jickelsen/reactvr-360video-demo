// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import * as THREE from 'three';
import Video360ModuleSetup from './Video360';

function init(bundle, parent, options) {

  var scene = new THREE.Scene();
  let {video360Module, video360Render} = Video360ModuleSetup(scene);
  console.log("Is is", video360Render);

  const vr = new VRInstance(bundle, 'ReactVR360VideoDemo', parent, {
    // Add custom options here
    cursorEnabled: true,
    nativeModules: [ video360Module ],
    scene: scene,
  });

  vr.render = function(timestamp) {
    // Any custom behavior you want to perform on each frame goes here
    video360Render(timestamp);
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
