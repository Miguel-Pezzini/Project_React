import { Container } from "./styles";
import { Tags } from '../Tags'
import { TiStar } from 'react-icons/ti';


export function Movies({ data }) {
    return(
        <Container>
            <h2>{data.title}</h2>
            <div>
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
            </div>
            <p>{data.text}</p>
            {
                data.tags &&
                <div className="tags">
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
                    }
                </div>
            }
        </Container>
    )
}