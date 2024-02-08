import styled from 'styled-components';

export const Container = styled.span`
    color: ${({ theme })=> theme.COLORS.WHITE_200};
    background-color: ${({ theme, isPreview })=> isPreview ? theme.COLORS.PINK_OPACITY : theme.COLORS.GRAY_500};

    padding: 5px 16px;
    border-radius: 8px;
    font-size: 12px;
`;