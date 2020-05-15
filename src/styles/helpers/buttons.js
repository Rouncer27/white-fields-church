import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const buttonBaseStyles = `
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 0.25rem 2rem;
  transition: all 0.3s ease;
  border-radius: 0.2rem;
  border: solid 0.1rem ${colors.colorShad};
  box-shadow: none;
  font-family: ${fonts.fontPrimary};
  font-style: normal;
  font-stretch: normal;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const buttonOne = `
  ${buttonBaseStyles};
  background: ${colors.colorShad};
  color: ${colors.colorAccent};

  &:hover {
    color: ${colors.colorShad};
    background: ${colors.colorAlt};
    border-color: ${colors.colorAlt};
  }
`

export const buttonOneAlt = `
  ${buttonBaseStyles};
  border-color: ${colors.colorTertiary};
  background: ${colors.colorTertiary};
  color: ${colors.greyBrown};

  &:hover {
    background: ${colors.colorAccent};
    border-color: ${colors.colorAccent};
  }
`

export const buttonTwo = `
  ${buttonBaseStyles};
  color: ${colors.colorShad};

  &:hover {
    border-color: ${colors.colorAlt};
    color: ${colors.colorAlt};
  }
`

export const buttonTwoAlt = `
  color: ${colors.colorTertiary};
  border-color: ${colors.colorTertiary};

  &:hover {
    border-color: ${colors.colorAccent};
    color: ${colors.colorAccent};
  }
`
