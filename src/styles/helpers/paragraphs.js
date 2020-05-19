import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const bodyBase = `
  color: ${colors.greyBrown};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.39;
  letter-spacing: normal;
`

export const bodyCopy = `
  ${bodyBase};
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)};
`

export const bodyCopyOne = `
  ${bodyBase};
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)};
`

export const bodyCopyTwo = `
  ${bodyBase};
  ${fontSizer(1.6, 2.1, 76.8, 150, 1.8)};
  line-height: 1.43;
`

export const bodyCopySemiBold = `
  font-family: ${fonts.fontPrimary};
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
`

export const footerType = `
  font-family: ${fonts.fontPrimary};
  ${fontSizer(1.1, 1.2, 76.8, 150, 1.6)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: ${colors.white};
`

export const footerTypeSemiBold = `
  ${footerType};
  font-weight: 600;
`
