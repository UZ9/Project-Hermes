import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


export default function PodiumCard({ winners, winner, index }) {
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
                        delay: 1 + (winners.length - winner.place + 1),
                        duration: 0.75,
                        ease: 'backInOut'
                    }
                }),
                hidden: { opacity: 0, y: -100 }
            }}
            key={winner.id}
            // className="col-12"
        >
            <div
                className={`flex items-center my-3 bg-white rounded-lg shadow p-3 border border-gray-300 hover:border-pink-300 hover:bg-pink-200 cursor-pointer`}
            >
                <div className="text-lg w-10">{"position goes here"}</div>

                <img
                    src={winner.avatar}
                    alt=""
                    className="rounded-full overflow-hidden border border-gray-200 shadow-sm w-11 h-11 mr-3"
                />

                <div className="text-sm flex-grow">
                    <p className="text-gray-900 leading-none font-semibold">
                        {winner.name || 'No name'}
                    </p>
                    <p className="text-gray-600">{"place goes here"}</p>
                </div>
            </div>
        </motion.div>
    )
}
