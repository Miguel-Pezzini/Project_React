import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
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

    .button-exclude {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK};
        width: 100%;
    }

    .button-save {
        width: 100%;
    }
`;
