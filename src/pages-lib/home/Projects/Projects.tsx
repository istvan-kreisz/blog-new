import styles from './gallery.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CardIII from '../../../components/CardIII'
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

					{direction === 'iOS Projects' ? (
						<p className="body">
							I have 6+ years of experience developing iOS apps. I worked for 2
							startups as an iOS developer, co-founded an iOS game development company
							and I built & designed 10+ apps from scratch. <br></br>
							<br></br> Skills:{' '}
							<strong>
								Swift, UIKit, SwiftUI, SpriteKit, Realm, Core Data, RxSwift,
								Combine, REST API, MVC, MVVM-C, Redux, Unit, UI Testing, Fastlane,
								Circle CI, Git, GitHub, CocoaPods, SPM, Asynchronous programming,
								Bitbucket, Sketch, Figma
							</strong>
						</p>
					) : (
						<p className="body">
							I've been doing web development for 4+ years. My primary focus has been
							full-stack development with React, TypeScript and Next.js on the
							frontend side, as well as Firebase, Google Cloud and Node.js on the
							backend side.
							<br></br>
							<br></br>
							Skills:{' '}
							<strong>
								HTML, (S)CSS, Tailwind, JavaScript, TypeScript, React, Next.js,
								Node.js Google Cloud, Firebase, Google Analytics, Web Scraping,
								Serverless Computing, Netlify, Vercel, Stripe, Google Maps API,
								LangChain, OpenAI
							</strong>
						</p>
					)}

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
