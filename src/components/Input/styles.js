import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    > svg {
            margin-left: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    > input {
        width: 100%;
        padding: 19px 24px;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    }

    
`;