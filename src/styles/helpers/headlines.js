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
    ${fontSizer(2, 3.2, 76.8, 150, 2)}
    color: ${colors.greyBrown};
    font-family: ${fonts.fontSecondary};
    line-height: 1.31;
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
    ${fontSizer(1.8, 2.2, 76.8, 160, 2)};
    font-family: ${fonts.fontSecondary};
    line-height: 1.36;
    font-weight: 700;
`
export const headlineFourRev = `
    ${headlineFour};
    color: ${colors.colorAccent};
`
