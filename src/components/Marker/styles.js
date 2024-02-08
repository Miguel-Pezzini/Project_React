import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 10px;
    padding: 16px;
    background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};


    svg {
        font-size: 22px;
        color: ${({ theme })=> theme.COLORS.PINK};
    }
    
`;