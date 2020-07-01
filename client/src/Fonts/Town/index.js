import { css } from 'styled-components'

import TownDisplayBlackOtf      from './Jason-Vandenberg-Town-10-Display-Black.otf'
import TownDisplayBoldOtf       from './Jason-Vandenberg-Town-10-Display-Bold.otf'
import TownDisplayMediumOtf     from './Jason-Vandenberg-Town-10-Display-Medium.otf'
import TownDisplayRegularTtf    from './Jason-Vandenberg-Town-10-Display-Regular.ttf'
import TownDisplayLightTtf      from './Jason-Vandenberg-Town-10-Display-Light.ttf'
import TownDisplayThinTtf       from './Jason-Vandenberg-Town-10-Display-Thin.ttf'
import TownDisplayExtraThinTtf  from './Jason-Vandenberg-Town-10-Display-Extra-Thin.ttf'
import TownDisplayHairlineTtf   from './Jason-Vandenberg-Town-10-Display-Hairline.ttf'

import TownTextBoldTtf          from './Jason-Vandenberg-Town-80-Text-Bold.ttf'
import TownTextBookTtf          from './Jason-Vandenberg-Town-80-Text-Book.ttf'
import TownTextLightTtf         from './Jason-Vandenberg-Town-80-Text-Light.ttf'
import TownTextMediumTtf        from './Jason-Vandenberg-Town-80-Text-Medium.ttf'
import TownTextThinTtf          from './Jason-Vandenberg-Town-80-Text-Thin.otf'

import TownTextBoldItalicTtf    from './Jason-Vandenberg-Town-80-Text-Bold-Italic.ttf'
import TownTextBookItalicTtf    from './Jason-Vandenberg-Town-80-Text-Book-Italic.otf'
import TownTextLightItalicTtf   from './Jason-Vandenberg-Town-80-Text-Light-Italic.otf'
import TownTextMediumItalicTtf  from './Jason-Vandenberg-Town-80-Text-Medium-Italic.ttf'
import TownTextThinItalicTtf    from './Jason-Vandenberg-Town-80-Text-Thin-Italic.otf'

const defineFont = (fontName, locals, url, format, weight, style) => {
  const font = `
    @font-face {
      font-family: '${fontName}';
      src: ${locals.map(local => `local('${local}'), `).join("")}
      url('${url}') format('${format ?? 'truetype'}');
      font-weight: ${weight ?? 300};
      font-style: ${style ?? 'normal'};
    }
  `

  return css`${font}`
}

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