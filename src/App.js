// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";
import { loveYouGesture, rock, paper, scissors, lizard, spock } from "./customGestures";
import rpslsAll from './rpsls-all.png'; 
import rpslsRock from './rpsls-rock.png'; 
import rpslsPaper from './rpsls-paper.png'; 
import rpslsScissors from './rpsls-scissors.png'; 
import rpslsLizard from './rpsls-lizard.png'; 
import rpslsSpock from './rpsls-spock.png'; 

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
var ctr = 0;
///////// NEW STUFF IMPORTS
function change(id){
  var image = document.getElementById('rpsls');
  image.src=rpslsAll; 
  if(id == "rock") { image.src=rpslsRock }
  if(id == "paper") { image.src=rpslsPaper }
  if(id == "scissors") { image.src=rpslsScissors }
  if(id == "lizard") { image.src=rpslsLizard }
  if(id == "spock") { image.src=rpslsSpock }
}

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
//    console.log("Handpose model loaded.");
    if(emoji) {console.log(emoji);}
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 200);
  };

  const detect = async (net) => {
      // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING
      if (hand.length > 0) {

        const GE = new fp.GestureEstimator([
//          fp.Gestures.VictoryGesture,
//          fp.Gestures.ThumbsUpGesture,
          loveYouGesture,
//          middleUp,
          rock,
          paper,
          scissors,
          lizard,
          spock
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 5);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          ctr = 0;
 //         console.log(gesture.gestures);
          console.log("confidence:  " + gesture.gestures[0].confidence);
          console.log(gesture.poseData);
          
          
//          image.src = rpslsScissors;

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          var poseName = gesture.gestures[maxConfidence].name
          console.log(poseName);
          change(poseName);

          setEmoji(gesture.gestures[maxConfidence].name);
//          console.log(emoji);

        }
      }
      else {
        ctr =  ctr + 1;
        if(ctr > 5) { change(); }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="App">
      <header className="App-header">
      
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "left",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "left",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        
        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}

        {/* NEW STUFF */
        
        <img id="rpsls" src={rpslsAll}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: -1100,
          bottom: 170,
          right: 0,
          textAlign: "center",
          height: 400,
        }}
        />

        }
      </header>
    </div>
  );
}

export default App;
