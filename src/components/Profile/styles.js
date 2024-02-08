import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
    svg {
        color: ${({ theme })=> theme.COLORS.PINK};
        font-size: 16px;
    }
`;