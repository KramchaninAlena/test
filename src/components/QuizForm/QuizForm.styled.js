import { ErrorMessage, Form } from "formik";
import styled from "styled-components";


export const StyleForm = styled(Form)`
width: 500px;
margin: 0 auto;
margin-top: 20px;
padding: 20px;
border: 1px solid black;
display: flex;
flex-direction: column;
gap: 5px;

`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
padding: 4px;
`

export const Button = styled.button`
width: 150px;
background-color: orange;
padding: 4px;
border-radius: 10px;
`;

export const Error = styled(ErrorMessage)`
color: red;
font-size: 14px;
`