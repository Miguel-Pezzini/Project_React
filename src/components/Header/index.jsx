import { Container, Profile } from './styles';
import { Input } from '../Input';
import { Link } from 'react-router-dom';


export function Header() {
    return(
        <Container>
            <h2>RocketMovies</h2>
            <Input placeholder="Pesquisar pelo título" />
            <Profile>
                <div>
                    <p>Rodrigo Goncalves</p>
                    <Link to="new" href='#'>sair</Link>
                </div>
                <img src="https://github.com/rodrigograca31.png" alt='User photo' />
            </Profile>
        </Container>
    )
}