import React from 'react'
import { Rect, Group, Text } from 'react-konva'
import Konva from 'konva'

const Option = ({ text, x, y, onClick }) => {
  return (
    <Group>
      <Rect
        x={x}
        y={y}
        onMouseDown={onClick}
        width={50}
        height={25}
        draggable
        radius={100}
        fill={Konva.Util.getRandomColor()}
      />
      <Text>Restart</Text>
    </Group>
  )
}

export default Option
