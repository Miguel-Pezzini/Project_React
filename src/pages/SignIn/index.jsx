import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input';
import { ButtonWidth } from '../../components/ButtonWidth';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Image } from './styles'


export function SignIn() {
    return(
        <Container>
            <Form>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>
                <div>
                    <h2>Faça seu login</h2>
                </div>
                <div className="footer--box">
                    <div className="input--box">
                        <Input placeholder="E-mail" icon={MdOutlineMail} />
                        <Input placeholder="Senha" icon={FiLock} />
                    </div>
                    <div className="button--box">
                        <ButtonWidth title="Entrar"/>
                    
                        <Link to="/register" ><ButtonText title="Criar conta"/></Link>
                    </div>
                </div>
            </Form>
            <Image />
            
        </Container>
    )
}