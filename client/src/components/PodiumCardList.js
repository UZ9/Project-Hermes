import PodiumCard from "./PodiumCard";

export default function PodiumCardList({ winners }) {
    return (
        <div className="col-12">
            {winners.map((winner, index) => (
                <PodiumCard
                    key={winner.id}
                    winners={winners}
                    winner={winner}
                    index={index}
                />
            ))}
        </div>
    )
}