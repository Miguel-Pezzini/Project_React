import { IoIosArrowRoundBack } from "react-icons/io";
import { FiCamera } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import { ButtonText } from '../../components/ButtonText';
import { ButtonWidth } from '../../components/ButtonWidth';
import { Input } from '../../components/Input'

import { Container, Header, Main, User, UserImage } from "./styles"; 

export function Profile() {
    return(
        <Container>
            <Header>
                <div>
                    <ButtonText title="Voltar" icon={IoIosArrowRoundBack} />
                </div>
            </Header>
            <Main>
                <User>
                    <img src="https://github.com/rodrigograca31.png" alt='User photo' />
                    <label htmlFor='avatar'>
                        <FiCamera/>
                        <input id='avatar' type='file'/>
                    </label>
                </User>
                <div className="profile--box">
                    <div className="input--box">
                        <Input icon={FiUser} placeholder="Nome"/>
                        <Input icon={MdOutlineMail} placeholder="E-mail"/>
                    </div>
                    <div className="input--box">
                        <Input icon={FiLock} placeholder="Senha atual"/>
                        <Input icon={FiLock} placeholder="Nova senha"/>
                    </div>
                    <ButtonWidth title="Salvar"/>
                </div>
            </Main>
        </Container>
    )
}