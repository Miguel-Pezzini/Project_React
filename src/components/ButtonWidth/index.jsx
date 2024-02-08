import { Container } from "./styles"; 

export function ButtonWidth({ icon: Icon, title, exclude, save, width, ...rest }) {
    return(
        <Container exclude={exclude}>
            <button className={exclude ? 'button-exclude' : 'button-save'} type="button"> {Icon && <Icon size={20}/>} {title} </button>
        </Container>
    )
}