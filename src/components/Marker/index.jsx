import { Container } from "./styles"; 
import { IoMdAdd } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

export function Marker({ title, isNew }) {
    return(
        <Container isNew={isNew}>
            {title} {isNew ? <IoMdAdd/> : <RiCloseFill />}
        </Container>
    )
}