import React from 'react'
import { Circle, Group, Text } from 'react-konva'

const Option = ({ text, x, y, fill, onClick }) => {
  return (
    <Group
      x={x}
      y={y}
      >
      <Circle
        onMouseDown={onClick}
        draggable
        radius={100}
        fill={fill}
      />
      <Text fontSize={32} y={-14} x={-50} align="center" text={text} fill="white" />
    </Group>
  )
}

export default Option
