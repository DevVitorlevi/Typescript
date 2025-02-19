
type Props = {
    title: string,
    duration: number,
    comentsqnt: number,
    tags: string[]
}

const Destructing = ({ title, duration, comentsqnt, tags }: Props) => {
    return (
        <div>
            <ul>
                <li >Titulo:{title}</li>
                <li >Duração:{duration}</li>
                <li>Numeros de Comentários:{comentsqnt}</li>
                <li>{tags.map(tag => (
                    <p>#{tag}</p>
                ))}</li>
            </ul>
        </div>
    )
}

export default Destructing