import styled from "styled-components";

const StyledFooter = styled.footer`
text-align: center;
color: ${({theme}) => theme.colors.lightCyan};
padding-bottom: 50px;
`;

const StyledLink = styled.a`
color: ${({theme}) => theme.colors.neonGreen};
text-decoration: none;
text-shadow: ${({theme}) => theme.colors.neonGreen} 1px 0 10px;
`;

export { StyledFooter, StyledLink };
