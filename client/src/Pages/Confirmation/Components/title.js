import React from 'react';
import styled from 'styled-components';

const Text = styled.text`
    font-weight:900;
`

export const Title = ({
    ...props
  }) => {
    return (
        <Text {...props}>
            {props.children}

        </Text>
    )
  }

export default Title;