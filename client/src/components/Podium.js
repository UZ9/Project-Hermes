import PodiumStep from "./PodiumStep"

export default function Podium({ winners }) {

    console.log({winners});


    const podium = [16, 14, 12, 10, 8, 6, 4, 2, 0, 1, 3, 5, 7, 9, 11, 13, 15]
    .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
    .filter(Boolean)

    return (
        <div
            className="col-12"

            style={{
                display: 'grid',
                gridAutoFlow: 'column dense',
                gap: '.5rem',
                marginTop: '2rem',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                // borderBottom: '1px solid #e5e7eb',
                height: 225
            }}
        >
            {podium.map((winner) => (
                <PodiumStep key={winner.id} podium={podium} winner={winner} />
            ))}
        </div>
    )
}