import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const buttonBaseStyles = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  min-width: 25rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border-radius: 2.9rem;
  border: solid 0.1rem ${colors.colorPrimary};
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.11;
  letter-spacing: normal;

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
  border-color: ${colors.colorPrimary};
  background: ${colors.white};
  color: ${colors.colorPrimary};

  &:hover {
    color: ${colors.white};
    background: ${colors.colorSecondary};
    border-color: ${colors.colorSecondary};
  }
`

export const buttonOneAlt = `
  ${buttonBaseStyles};
  border-color: ${colors.colorSecondary};
  background: ${colors.colorPrimary};
  color: ${colors.colorSecondary};

  &:hover {
    color: ${colors.colorPrimary};
    background: ${colors.colorSecondary};
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
