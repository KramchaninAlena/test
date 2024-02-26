import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  button {
  cursor: pointer;
  color: inherit;
  /* background-color: transparent; */
  border: transparent;
  }

  a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6, p {
  margin: 0;
}
`;

