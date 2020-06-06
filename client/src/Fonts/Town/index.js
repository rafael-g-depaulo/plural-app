import { css } from 'styled-components'

import TownDisplayBlackOtf      from './Jason Vandenberg - Town 10 Display Black [TheFontsMaster.com].otf'
import TownDisplayBoldOtf       from './Jason Vandenberg - Town 10 Display Bold [TheFontsMaster.com].otf'
import TownDisplayMediumOtf     from './Jason Vandenberg - Town 10 Display Medium [TheFontsMaster.com].otf'
import TownDisplayRegularTtf    from './Jason Vandenberg - Town 10 Display Regular [TheFontsMaster.com].ttf'
import TownDisplayLightTtf      from './Jason Vandenberg - Town 10 Display Light [TheFontsMaster.com].ttf'
import TownDisplayThinTtf       from './Jason Vandenberg - Town 10 Display Thin [TheFontsMaster.com].ttf'
import TownDisplayExtraThinTtf  from './Jason Vandenberg - Town 10 Display Extra Thin [TheFontsMaster.com].ttf'
import TownDisplayHairlineTtf   from './Jason Vandenberg - Town 10 Display Hairline [TheFontsMaster.com].ttf'

import TownTextBoldTtf          from './Jason Vandenberg - Town 80 Text Bold [TheFontsMaster.com].ttf'
import TownTextBookTtf          from './Jason Vandenberg - Town 80 Text Book [TheFontsMaster.com].ttf'
import TownTextLightTtf         from './Jason Vandenberg - Town 80 Text Light [TheFontsMaster.com].ttf'
import TownTextMediumTtf        from './Jason Vandenberg - Town 80 Text Medium [TheFontsMaster.com].ttf'
import TownTextThinTtf          from './Jason Vandenberg - Town 80 Text Thin [TheFontsMaster.com].otf'

import TownTextBoldItalicTtf    from './Jason Vandenberg - Town 80 Text Bold Italic [TheFontsMaster.com].ttf'
import TownTextBookItalicTtf    from './Jason Vandenberg - Town 80 Text Book Italic [TheFontsMaster.com].otf'
import TownTextLightItalicTtf   from './Jason Vandenberg - Town 80 Text Light Italic [TheFontsMaster.com].otf'
import TownTextMediumItalicTtf  from './Jason Vandenberg - Town 80 Text Medium Italic [TheFontsMaster.com].ttf'
import TownTextThinItalicTtf    from './Jason Vandenberg - Town 80 Text Thin Italic [TheFontsMaster.com].otf'

const defineFont = (fontName, locals, url, format, weight, style) => css`
  @font-face {
    font-family: ${fontName};
    src: ${locals.map(local => `local('${local}'), `)}
    url('${url}') format('${format ?? 'truetype'}');
    font-weight: ${weight ?? 300};
    font-style: ${style ?? 'normal'};
  }
`

export default css`
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayBlackOtf,    "truetype", 900)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayBoldOtf,     "truetype", 700)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayMediumOtf,   "truetype", 600)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayRegularTtf,  "truetype", 400)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayLightTtf,    "truetype", 300)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayThinTtf,     "truetype", 250)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayExtraThinTtf,"truetype", 200)}
  ${defineFont("Town Display", ["Town Display", "TownDisplay", "Town-Display"], TownDisplayHairlineTtf, "truetype", 100)}

  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextBoldTtf,   "truetype", 900)}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextMediumTtf, "truetype", 700)}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextBookTtf,   "truetype", 400)}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextLightTtf,  "truetype", 300)}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextThinTtf,   "truetype", 200)}

  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextBoldItalicTtf,   "truetype", 900, "italic")}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextMediumItalicTtf, "truetype", 700, "italic")}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextBookItalicTtf,   "truetype", 400, "italic")}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextLightItalicTtf,  "truetype", 300, "italic")}
  ${defineFont("Town Text", ["Town Text", "TownText", "Town-Text"], TownTextThinItalicTtf,   "truetype", 200, "italic")}
`