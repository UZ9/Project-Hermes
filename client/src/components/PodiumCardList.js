import PodiumCard from "./PodiumCard";

export default function PodiumCardList({ winners }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto px-2">
                    <div className="px-1 card card-common">
                        <div className="card-body">
                            <table className="table">
                                <tr>
                                    <th>RANKING</th>

                                    <th>NUMBER</th>
                                    <th>NAME</th>
                                    <th>YEET</th>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>1</th>
                                </tr>
                                {winners.map((winner, index) => (
                                    <tr>
                                        <td>{winner.id}</td>
                                        <td>{winner.id}</td>
                                        <td>{winner.name}</td>
                                    </tr>
                                ))}

                            </table>
                        </div>
                    </div>
                    {/* {winners.map((winner, index) => (
                <PodiumCard
                    key={winner.id}
                    winners={winners}
                    winner={winner}
                    index={index}
                />
            ))} */}
                </div>
            </div>
        </div>

    )
}