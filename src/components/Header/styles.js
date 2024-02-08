import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    padding: 24px 123px;
    gap: 64px;
    align-items: center;
    grid-area: header;
    border-bottom: 1px solid ${({ theme })=> theme.COLORS.GRAY_400};

    > h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: bold;
    }
`;

export const Profile = styled.div`
    display: flex;
    gap: 10px;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    > div > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.DARK_WHITE};
        font-weight: bold;
    }
    > div > a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;