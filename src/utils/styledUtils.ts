import { css } from "styled-components";

export const devices = {
  sm: (...args: any) => css`
    @media (min-width: 576px) {
      ${css(args)};
    }
  `,
  md: (...args: any) => css`
    @media (min-width: 768px) {
      ${css(args)};
    }
  `,
  lg: (...args: any) => css`
    @media (min-width: 992px) {
      ${css(args)};
    }
  `,
  xl: (...args: any) => css`
    @media (min-width: 1200px) {
      ${css(args)};
    }
  `,
};
