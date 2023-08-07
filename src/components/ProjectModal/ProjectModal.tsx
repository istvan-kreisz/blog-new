import styles from './projectmodal.module.css'
import OutsideClickHandler from 'react-outside-click-handler'
import cn from 'classnames'
import { ProjectData } from '@/constants/projectsData'
import { motion } from 'framer-motion'
import { item } from '../../constants/animations'

interface PropTypes {
	closeModal: () => void
	project: ProjectData
}

export default function Modal({ closeModal, project }: PropTypes) {
	return (
		<OutsideClickHandler onOutsideClick={() => closeModal()}>
			<div className={styles.container}>
				<button className={cn('button-svg', styles.close_button)} onClick={closeModal}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M16.7729 8.28771C17.0658 7.99481 17.0658 7.51994 16.7729 7.22705C16.48 6.93415 16.0052 6.93415 15.7123 7.22705L16.7729 8.28771ZM7.22699 15.7123C6.9341 16.0052 6.9341 16.4801 7.22699 16.773C7.51989 17.0659 7.99476 17.0659 8.28765 16.773L7.22699 15.7123ZM15.7123 16.7729C16.0052 17.0658 16.48 17.0658 16.7729 16.7729C17.0658 16.48 17.0658 16.0052 16.7729 15.7123L15.7123 16.7729ZM8.28765 7.22699C7.99476 6.9341 7.51989 6.9341 7.22699 7.22699C6.9341 7.51989 6.9341 7.99476 7.22699 8.28765L8.28765 7.22699ZM15.7123 7.22705L7.22699 15.7123L8.28765 16.773L16.7729 8.28771L15.7123 7.22705ZM16.7729 15.7123L8.28765 7.22699L7.22699 8.28765L15.7123 16.7729L16.7729 15.7123Z" />
					</svg>
				</button>

				<div className={styles.content}>
					<div className={styles.contentHeader}>
						<h3 className={cn('h4', styles.title)}>{project.title}</h3>
						<p className={cn('caption')}>{project.date}</p>
					</div>
					<p className={cn('body')}>{project.text}</p>

					<div className={styles.buttonContainer}>
						<motion.button
							variants={item}
							className={cn('button', styles.linkButton)}
							onClick={() => window.open(project.link, '_blank')}
						>
							<p className={styles.buttonText}>View Project</p>
						</motion.button>
					</div>
				</div>
			</div>
		</OutsideClickHandler>
	)
}
