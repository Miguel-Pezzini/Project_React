import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 123px;
    gap: 40px;
`;

export const Head = styled.div`
    display: flex;
    gap: 24px;
    flex-direction: column;

    .head {
        display: flex;
        align-items: center;
        gap: 19px;
    }
    .head--stars {
        display: flex;
        gap: 9px;

        svg {
            font-size: 20px;
            color: ${({ theme })=> theme.COLORS.PINK};
        }
    }
`;

export const  Tag = styled.div`
    display: flex;
    gap: 8px;
`;
export const Main = styled.div`
    > p {
        color: ${({ theme })=> theme.COLORS.DARK_WHITE};
    }
`;

