import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas:
    "header"
    "content";

`;

export const Content = styled.div`
    padding: 50px 123px;
    grid-area: content;

    > div {
        display: flex;
        justify-content: space-between;

        > h1 {
            font-weight: 300;
        }
    }
`;