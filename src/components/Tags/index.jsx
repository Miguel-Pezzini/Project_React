import { Container } from "./styles"; 

export function Tags({title, isPreview}) {
    return(
        <Container isPreview={isPreview}>
            {title}
        </Container>
    )
}