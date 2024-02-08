import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    gap: 8px;
    margin-top: 32px;
    border-radius: 8px;
    flex-direction: column;
    padding: 32px;
    height: 225px;
    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
    > p {
        overflow: hidden;
    }
    > div > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    >
    .tags {
        display: flex;
        gap: 8px;
        margin-top: 15px;
    }
`;