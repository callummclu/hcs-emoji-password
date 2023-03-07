import MemoryGame from 'react-card-memory-game'


interface DistractionGameProps{
    type: "emoji"|"standard";
}

export const DistractionGame = (props:DistractionGameProps) => {

    const redirect = () => {
        window.location.replace(`${window.location.origin}/${props.type}/repeat`)
    }

    return (
        <>
            <MemoryGame gridNumber={4}  gameFinished={redirect}/>
        </>
    )
}