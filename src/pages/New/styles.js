import styled from 'styled-components';

export const Container = styled.div`

`;

export const Form = styled.form`
    padding: 50px 123px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    > div {
        display: flex;
        gap: 40px;
    }

    .header {
        display: block;
    }
    .h1 {
        margin-top: 20px;
    }
    .width {
        display: block;
    }

`;

export const Markers = styled.div`
    > h2{
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin-bottom: 24px;
    }
`;

export const MarkersArea = styled.div`
    display: flex;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    gap: 24px;
    padding: 16px;
    border-radius: 8px;
`;