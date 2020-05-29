import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const buttonOne = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  min-width: 25rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border-radius: 2.9rem;
  border: solid 0.1rem ${colors.colorPrimary};
  box-shadow: 0.1rem 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
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

export const buttonOneWhite = `
  ${buttonOne};
  border-color: ${colors.colorPrimary};
  background: ${colors.white};
  color: ${colors.colorPrimary};

  &:hover {
    color: ${colors.white};
    background: ${colors.colorSecondary};
    border-color: ${colors.colorSecondary};
  }
`

export const buttonOneBlue = `
  ${buttonOne};
  border-color: ${colors.colorSecondary};
  background: ${colors.colorPrimary};
  color: ${colors.colorSecondary};

  &:hover {
    color: ${colors.colorPrimary};
    background: ${colors.colorSecondary};
  }
`

export const buttonOneClear = `
  ${buttonOne};
  border-color: ${colors.white};
  background: transparent;
  color: ${colors.white};

  &:hover {
    color: ${colors.colorPrimary};
    background: ${colors.colorSecondary};
  }
`
