import { css } from "@linaria/core";

const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;

export { globals };
