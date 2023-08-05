import styles from './gallery.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CardIII from '../../../components/CardIII'
import Dropdown from '../../../components/Dropdown'
import { ProjectData, projectsData } from '@/constants/projectsData'
import ProjectModal from '@/components/ProjectModal/ProjectModal'

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState<ProjectData | undefined>(undefined)
	const options = projectsData.map((item) => item.title)

	const [direction, setDirection] = useState(options[0])

	return (
		<motion.section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.head}>
					<div className={styles.nav_background}>
						<div className={styles.nav}>
							{projectsData.map((item, index) => (
								<button
									className={cn(styles.button, {
										[styles.active]: item.title === direction,
									})}
									onClick={() => setDirection(item.title)}
									key={index}
								>
									{item.title}
								</button>
							))}
						</div>
					</div>

					{/* <Dropdown
						className={styles.dropdown}
						value={direction}
						options={options}
						setValue={setDirection}
					/> */}
				</div>

				<div className={styles.wrapper}>
					{projectsData
						.find((item) => item.title === direction)
						?.projects.map((item, index) => (
							<CardIII
								key={index}
								project={item}
								didClickProject={setSelectedProject}
							/>
						))}
				</div>
			</div>
			{selectedProject && (
				<section className={cn('background')}>
					<div className={cn('align')}>
						<ProjectModal
							closeModal={() => setSelectedProject(undefined)}
							project={selectedProject}
						/>
					</div>
				</section>
			)}
		</motion.section>
	)
}

export default Projects
