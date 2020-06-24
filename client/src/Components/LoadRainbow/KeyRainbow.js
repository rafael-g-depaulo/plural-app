import React from 'react'

import styled, { keyframes } from 'styled-components';

export const KeyRainbow = keyframes`

  0% { 
      transform: rotate(0deg); 
        border-top: 16px solid #ff1a1a; /* Red */

      }
15% { 
        border-top: 16px solid #ff8c1a; /* Laranja */
     }
30% { 
        border-top: 16px solid #ffff33; /* Amarelo */
     }
45% { 
        border-top: 16px solid #66ff33; /* Verde*/

    }
60% { 
    border-top: 16px solid #5cd6d6; /* Azul claro*/
         
    }
75% { 
    border-top: 16px solid #000099; /* Azul escuro*/
     
    }
90% { 
        border-top: 16px solid #7300e6; /* roxo*/
      
    }

  100% {
       transform: rotate(360deg);
        }

  `

export default KeyRainbow;