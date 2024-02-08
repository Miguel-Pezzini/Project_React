import styled from 'styled-components';
import Backgroundimg from '../../assets/Backgroundimg.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: stretch;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 150px 0 123px;
    margin: auto;
    gap: 48px;

    > div > h1 {
        color: ${({ theme })=> theme.COLORS.PINK};
        font-weight: bold;
        font-size: 48px;
    }
    > div > p {
        color: ${({ theme })=> theme.COLORS.GRAY_300};
        font-size: 14px;
    }
    > div > h2 {
        color: ${({ theme })=> theme.COLORS.DARK_WHITE};
        font-weight: 400;
    }
    .footer--box {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .input--box {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .button--box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 42px;
    }
`;

export const Image = styled.div`
    flex: 1;
    background: url(${Backgroundimg}) no-repeat center center;
    background-size: cover;
    opacity: 0.3;
`;