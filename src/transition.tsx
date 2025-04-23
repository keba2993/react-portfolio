import { motion } from 'motion/react';

function transition(Component: JSX.Element) {
	return (
		<>
			<motion.div
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				{Component}
			</motion.div>
		</>
	);
}

export default transition;
