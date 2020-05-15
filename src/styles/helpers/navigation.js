import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const navOne = `
  ${fontSizer(1.2, 1.4, 76.8, 150, 1.8)};
  color: ${colors.colorPrimary};
  font-family: ${fonts.fontPrimary};
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.colorTertiary};
  }
`
