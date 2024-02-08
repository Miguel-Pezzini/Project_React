import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input';
import { ButtonWidth } from '../../components/ButtonWidth';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Image } from './styles'


export function SignUp() {
    return(
        <Container>
            <Form>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>
                <div>
                    <h2>Crie sua conta</h2>
                </div>
                <div className="footer--box">
                    <div className="input--box">
                        <Input placeholder="E-mail" icon={FiUser} />
                        <Input placeholder="Nome" icon={MdOutlineMail} />
                        <Input placeholder="Senha" icon={FiLock} />
                    </div>
                    <div className="button--box">
                        <ButtonWidth title="Cadastrar"/>
                        <Link to="/"><ButtonText icon={IoIosArrowRoundBack} title="Voltar para o login"/></Link>
                    </div>
                </div>
            </Form>
            <Image />
        </Container>
    )
}