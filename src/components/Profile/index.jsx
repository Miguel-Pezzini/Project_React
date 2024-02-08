import { Container } from "./styles"; 
import { LuClock3 } from "react-icons/lu";

export function Profile() {
    return(
        <Container>
            <img src="https://github.com/rodrigograca31.png" alt='User photo' />
            <p>Por Rodrigo Gonçalves </p>
            <LuClock3/>
            <p>23/05/22 às 08:00</p>
        </Container>
    )
}