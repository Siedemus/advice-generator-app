import styled from "styled-components";

export const StyledContainer = styled.main`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.darkGrayishBlue};
max-width: 550px;
border-radius: 15px;
`