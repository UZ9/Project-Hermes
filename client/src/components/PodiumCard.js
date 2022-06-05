import { motion } from 'framer-motion/dist/framer-motion'


export default function PodiumCard({ winners, winner, index }) {
    const ranking = winners.length - winner["division"]["ranking"];

    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={{
                visible: () => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 1 + (winners.length - ranking) / 6,
                        duration: 1.25,
                        ease: 'backInOut'
                    }
                }),
                hidden: { opacity: 0, y: -25 }
            }}
            key={winner.id}
        >
            <div className={`flex items-center my-2 mb-3 bg-white rounded-lg card-common p-3 border border-gray-300 hover:border-pink-300 hover:bg-pink-200 cursor-pointer`}>
                <div className='row'>
                    <div className='col-2'>
                        <span className='logo logo-primary'>
                            #{index + 1} 
                        </span>
                        <span className='logo logo-primary'> </span>
                        <span className='logo logo-primary'>
                            {winner.id}
                        </span>
                    </div>
                    <div className='col'>
                        
                    </div>
                </div>

                {/* {winner["scouting"] !== undefined ? <div>I'm a scout</div> : undefined} */}

                <span className='logo logo-primary'>

                </span>
                <span> </span>
                <span className='logo'>
                    {winner.name.toUpperCase()}
                </span>

            </div>
        </motion.div >
    )
}
