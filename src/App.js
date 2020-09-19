import React, { useState } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import dark from './imgs/dark.jpg'
import misty from './imgs/misty.jpg'
import trail from './imgs/trail.jpg'
import './App.css';

import Option from './shapes/option';

const images = [
  dark,
  misty,
  dark,
  trail,
  dark,
];

const options = [
  [
    'Shake', 'Stare', 'Shudder', 'Shiver'
  ],
  [
    'Beat', 'Butcher', 'Break', 'Batter',
  ],
  [
    'Fear', 'Flee', 'Flight', 'Falter'
  ],
  [
    'Tree', 'Tree', 'Tree', 'Tree',
  ],
]

const currentStory = [
  'You stare out into the darkness - a figure approaches',
  'The figure appears to be carrying something',
  'The figure keeps moving closer',
  'The figure brandishes an axe',
  'You are a tree',
];

const App = () => {
  const [chapter, setChapter] = useState(0);
  const [test] = useImage(images[chapter]);
  const advanceChapter = () => {
    if (chapter === 4) {
      setChapter(0);
    } else {
      setChapter(chapter + 1);
    }
  };
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight} fill="black" >
        <Layer>
          <Image image={test} width={window.innerWidth} height={window.innerHeight} />
          <Text
            width={window.innerWidth}
            y={window.innerHeight / 2}
            fill="white"
            wrap="char"
            fontSize={32}
            align="center"
            text={currentStory[chapter]}
          />
        </Layer>
        {
          chapter <= 3 ? (
            <Layer>
              <Option text={options[chapter][0]} onClick={advanceChapter} fill="red" x={window.innerWidth * 0.5} y={window.innerHeight * 0.25} />
              <Option text={options[chapter][1]} onClick={advanceChapter} fill="blue" x={window.innerWidth * 0.75} y={window.innerHeight / 2} />
              <Option text={options[chapter][2]} onClick={advanceChapter} fill="pink" x={window.innerWidth * 0.25} y={window.innerHeight / 2} />
              <Option text={options[chapter][3]} onClick={advanceChapter} fill="green" x={window.innerWidth * 0.5} y={window.innerHeight * 0.75} />
            </Layer>
          ) : null
        }
      </Stage>
    </div>
  );
}

export default App;
