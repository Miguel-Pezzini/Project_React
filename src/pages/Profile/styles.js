import styled from 'styled-components';

export const Container = styled.div`

`;
export const Header = styled.header`
    margin-top: 10px;
    background: ${({ theme })=> theme.COLORS.PINK_OPACITY};
    height: 144px;
    display: flex;
    align-items: center;

    > div {
        padding-left: 150px;
    }
`;
export const Main = styled.div`
    
    .profile--box {
        width: 340px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;

        .input--box {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
`;
export const User = styled.div`
        margin: -90px auto 32px;
        position: relative;
        width: 186px;
        height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
    > label {
        width: 48px;
        height: 48px;
        background: ${({ theme })=> theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            font-size: 20px;
            color: ${({ theme })=> theme.COLORS.BACKGROUND_700};
        }
    }
    > label:hover {
        filter: brightness(95%)
    }
`;

export const UserImage = styled.img`

`;