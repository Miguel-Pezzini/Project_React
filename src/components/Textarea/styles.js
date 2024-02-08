import styled from "styled-components";

export const Container = styled.textarea`
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    resize: none;

    height: 200px;
    padding: 20px 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
`;