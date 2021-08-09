// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const loveYouGesture = new GestureDescription('i_love_you'); 

const allFingers =  [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky];

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
//----------------------
// ROCK Gesture Description
export const rock = new GestureDescription('rock'); 

for(let finger of allFingers){
    rock.addCurl(finger, FingerCurl.FullCurl, 1.0); 
    rock.addCurl(finger, FingerCurl.PartialCurl, 1.0); 
}
//----------------------
// PAPER Gesture Description
export const paper = new GestureDescription('paper'); 

for(let finger of allFingers){
    paper.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.40);
    paper.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
    paper.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
//    paper.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 4.0);
//    paper.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 4.0);

    // index:
    paper.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
    paper.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

    // middle:
    paper.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
    paper.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

    // ring:
    paper.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
    paper.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

    // pinky:
    paper.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
    paper.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
    paper.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 2.0);
    paper.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 2.0);
   
    // give additional weight to index and ring fingers
//    paper.setWeight(Finger.Index, 2);
//    paper.setWeight(Finger.Middle, 2);
    paper.setWeight(Finger.Thumb, 2);
}
//----------------------
// SCISSORS Gesture Description
export const scissors = new GestureDescription('scissors'); 

// thumb:
scissors.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
scissors.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
scissors.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissors.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
scissors.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
scissors.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
scissors.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
scissors.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
scissors.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
scissors.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring:
scissors.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissors.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
//scissors.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.2);
scissors.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
scissors.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);
scissors.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
scissors.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
//scissors.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
scissors.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissors.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
//scissors.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
scissors.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
scissors.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);
scissors.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
scissors.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
//scissors.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
scissors.setWeight(Finger.Thumb, 2);
scissors.setWeight(Finger.Pinky, 2);
//----------------------
// LIZARD Gesture Description
export const lizard = new GestureDescription('lizard'); 

for(let finger of allFingers){
    lizard.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    lizard.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    lizard.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
    lizard.addDirection(finger, FingerDirection.DiagonalUpRight, 0.85);
    lizard.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.85);
    lizard.addDirection(finger, FingerDirection.DiagonalDownRight, 0.75);
    lizard.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.75);
}
lizard.setWeight(Finger.Ring, 2);
lizard.setWeight(Finger.Pinky, 2);
//----------------------
// SPOCK Gesture Description
export const spock = new GestureDescription('spock'); 
spock.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
spock.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
spock.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
spock.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
spock.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    spock.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    spock.addDirection(finger, FingerDirection.VerticalUp, 0.80);
    spock.addDirection(finger, FingerDirection.VerticalDown, 0.80);

    spock.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
    spock.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
//    spock.addDirection(finger, FingerDirection.DiagonalDownRight, 0.70);
//    spock.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.70);
    spock.setWeight(Finger.Thumb, 2);
    spock.setWeight(Finger.Pinky, 2);
}