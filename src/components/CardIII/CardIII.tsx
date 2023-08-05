import styles from './cardIII.module.css'
import cn from 'classnames'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Link from 'next/link'
import { ProjectData } from '@/constants/projectsData'

const variants = {
	show: { opacity: 1, transition: { staggerChildren: 0.2 } },
	hidden: { opacity: 0 },
}

const CardIII = ({
	project,
	didClickProject,
}: {
	project: ProjectData
	didClickProject: (project: ProjectData) => void
}) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	const { title, image, date } = project

	useEffect(() => {
		if (inView) {
			controls.start('show')
		}
	}, [controls, inView])

	return (
		<motion.article
			variants={variants}
			initial="hidden"
			ref={ref}
			animate={controls}
			className={styles.container}
			onClick={() => didClickProject(project)}
		>
			<div className={styles.image_container}>
				<img className={styles.image} src={image} />
			</div>

			<div className={styles.content}>
				<div className={styles.contentHeader}>
					<h3 className={cn('body-2-bold', styles.title)}>{title}</h3>
					<p className={cn('caption-2')}>{date}</p>
				</div>
				{/* <p className={cn('caption')}>{text}</p> */}
			</div>
		</motion.article>
	)
}

export default CardIII
