import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Body copy ONE //
export const B1OpenSans = `
  ${fontSizer(1.4, 1.4, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
`

export const B1OpenSansWhite = `
  ${B1OpenSans};
  color: ${colors.white};
`

export const B1OpenSansBlue = `
  ${B1OpenSans};
  color: ${colors.colorPrimary};
`

export const B1OpenSansGrey = `
  ${B1OpenSans};
  color: ${colors.colorShad};
`

// Body copy TWO //
export const B2OpenSans = `
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
`

export const B2OpenSansWhite = `
  ${B2OpenSans};
  color: ${colors.white};
`

export const B2OpenSansWhiteBold = `
  ${B2OpenSansWhite};
  font-weight: 600;
`

export const B2OpenSansBlue = `
  ${B2OpenSans};
  color: ${colors.colorPrimary};
`

export const B2OpenSansBlueBold = `
  ${B2OpenSansBlue};
  font-weight: 600;
`

// Body copy THREE //
export const B3OpenSans = `
  ${fontSizer(1.4, 1.4, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
`

export const B3OpenSansBlue = `
  ${B3OpenSans};
  color: ${colors.colorPrimary};
`

export const B3OpenSansGold = `
  ${B3OpenSans};
  color: ${colors.colorSecondary};
`

// Body copy FOOTER //
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
