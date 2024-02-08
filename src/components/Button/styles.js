import styled from 'styled-components';

export const Container = styled.div`
    
    button {
    display: flex;
    justify-content: center;
    align-items: center; 

    text-align: center;
    font-size: 16px;

    padding: 16px 32px;
    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
