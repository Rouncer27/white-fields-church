import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Headline Styles #1 //
export const H1Lato = `
    ${fontSizer(3.6, 6.8, 76.8, 150, 3.4)}
    font-family: ${fonts.fontSecondary};
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    line-height: 1.03;
    letter-spacing: normal;
  `

export const H1LatoWhite = `
  ${H1Lato};
  color: ${colors.white};
`

export const H1LatoBlue = `
  ${H1Lato};
  color: ${colors.colorPrimary};
`

// Headline Styles #2 //
export const H2Lato = `
    ${fontSizer(3, 4, 76.8, 150, 3.2)}
    font-family: ${fonts.fontSecondary};
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: normal;
`
export const H2LatoBlue = `
    ${H2Lato};
    color: ${colors.colorPrimary};
`

export const H2LatoMist = `
    ${H2Lato};
    color: ${colors.colorTertiary};
`
export const H2LatoWhite = `
    ${H2Lato};
    color: ${colors.white};
`
export const H2LatoGold = `
    ${H2Lato};
    color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Lato = `
    ${fontSizer(1.8, 3.1, 76.8, 160, 2.4)}
    font-family: ${fonts.fontSecondary};
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    line-height: 1.29;
    letter-spacing: normal;
`
export const H3LatoBlue = `
    ${H3Lato};
    color: ${colors.colorPrimary};
`

// Headline Styles #4 //
export const H4Lato = `
    ${fontSizer(1.6, 2, 76.8, 160, 2)};
    font-family: ${fonts.fontSecondary};
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: normal;
`
export const H4LatoGold = `
    ${H4Lato};
    color: ${colors.colorSecondary};
`
export const H4LatoWhite = `
    ${H4Lato};
    color: ${colors.white};
`
export const H4LatoBlue = `
    ${H4Lato};
    color: ${colors.colorPrimary};
`
