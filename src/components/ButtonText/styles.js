import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    color: ${({ theme })=> theme.COLORS.PINK};

    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;