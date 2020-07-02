import React from 'react'
import ChipInput from 'material-ui-chip-input'

export const Display = ({
  onChange = () => {},
  onDelete = () => {},
  ...props
}) => {
  return (
    <ChipInput
      style={{
        color: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 30,
        paddingRight: 30,
        background: '#FFFF',
        width: '100%', 
        border: '2px solid #00000',
        borderRadius: 50,
      }}
      newChipKeyCodes={[32, 13]}
      onChange={onChange}
      onDelete={onDelete}
      {...props}
    />
  )
}

export default Display
