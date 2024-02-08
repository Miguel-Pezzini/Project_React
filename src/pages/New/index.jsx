import { IoIosArrowRoundBack } from "react-icons/io";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea'
import { ButtonWidth } from '../../components/ButtonWidth';
import { Marker } from '../../components/Marker';

import { Container, Form, Markers, MarkersArea } from "./styles"; 

export function New() {
    return(
        <Container>
            <Header />
            <Form>
                <div className="header">
                    <ButtonText icon={IoIosArrowRoundBack} title="Voltar"/>
                    <h1 className="h1">Novo filme</h1>
                </div>
                <div>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <Textarea placeholder="Observações"/>
                <div className="width">
                    <Markers>
                        <h2>Marcadores</h2>
                        <MarkersArea>
                            <Marker title="React"/>
                            <Marker title="Novo marcador" isNew/>
                        </MarkersArea>
                    </Markers>
                </div>
                <div >
                    <ButtonWidth title="Excluir filme" exclude/>
                    <ButtonWidth title="Salvar alterações"/>
                </div>

            </Form>
        </Container>
    )
}