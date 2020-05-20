import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const headlineBase = `
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
`
// Headline Styles #1 //
export const headlineOne = `
    ${headlineBase};
    ${fontSizer(2.4, 4, 76.8, 150, 2.2)}
    color: ${colors.greyBrown};
    font-family: ${fonts.fontSecondary};
    line-height: 1.2;
  `
export const headlineOneRev = `
  ${headlineOne};
  color: ${colors.colorAccent};
`
// Headline Styles #2 //
export const headlineTwo = `
    ${headlineBase};
    ${fontSizer(3, 4, 76.8, 150, 2.8)}
    font-family: ${fonts.fontSecondary};
    font-weight: 900;
    line-height: 1.25;
`
// Headline Styles #2  REVERSED //
export const headlineTwoRev = `
    ${headlineTwo};
    color: ${colors.colorAccent};
`
// Headline Styles #3 //
export const headlineThree = `
    ${headlineBase};
    ${fontSizer(1.8, 2.6, 76.8, 160, 2)}
    color: ${colors.blackLight};
    font-family: ${fonts.fontSecondary};
    line-height: 1.42;
`
// Headline Styles #3  REVERSED //
export const headlineThreeRev = `
    ${headlineThree};
    color: ${colors.colorAccent};
`
// Headline Styles #4 //
export const headlineFour = `
    ${headlineBase};
    ${fontSizer(1.6, 2.2, 76.8, 160, 1.8)};
    font-family: ${fonts.fontSecondary};
    font-weight: 900;
    line-height: 1.3;
`
export const headlineFourRev = `
    ${headlineFour};
    color: ${colors.colorAccent};
`
