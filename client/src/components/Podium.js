import PodiumStep from "./PodiumStep"

export default function Podium({ podiumOffset, winners, winnerValueFunc }) {

    const podium = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        .reduce((podiumOrder, position) => {
            return [...podiumOrder, { ...winners[position], position: position }]
        }, [])
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
            {podium.map((winner, index) => (
                <PodiumStep key={winner.id} podiumOffset={podiumOffset} podium={podium} winnerIndex={winner.position} winnerValueFunc={winnerValueFunc} winner={winner} />
            ))}
        </div>
    )
}