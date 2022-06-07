import { motion } from 'framer-motion/dist/framer-motion'

export default function PodiumStep({ podium, podiumOffset, winnerIndex, winnerValueFunc, winner }) {

    const offset = podium.length - winnerIndex / 1.3;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center'
            }}
        >
            <motion.div
                style={{
                    alignSelf: 'center',
                    marginBottom: '.25rem',
                    fontFamily: "Audiowide, cursive",
                }}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 0.2 + offset / 16,
                            duration: 0.5
                        }
                    },
                    hidden: { opacity: 0 }
                }}
            >
                {winner["id"]}
            </motion.div>

            <motion.div
                style={{
                    width: '6rem',
                    placeContent: 'center',
                    display: 'flex',
                    borderTopLeftRadius: '.5rem',
                    boxShadow: "1px 2px 5px #999",
                    borderTopRightRadius: '.5rem',
                    borderColor: 'rgba(190,24,93,1)',
                    backgroundColor: '#E77917',
                    marginBottom: -1,
                    
                    //box-shadow: 1px 2px 5px #999;
                    filter: `opacity(${0.5 + offset / podium.length})`
                }}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        height: 175 * (offset / podium.length),
                        opacity: 1,
                        transition: {
                            delay: 0.2 + offset / 16,
                            duration: 1.25,
                            ease: 'backInOut'
                        }
                    },
                    hidden: { opacity: 0, height: 0 }
                }}
            >
                <span style={{ fontFamily: "Audiowide, cursive", color: 'white', alignSelf: 'flex-end' }}>
                    {winnerValueFunc(winner)}
                </span>
            </motion.div>
        </div>
    )
}
