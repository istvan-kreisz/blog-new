import styles from './hero.module.css'
import cn from 'classnames'
import { container, item } from '../../../constants/animations'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import VideoModal from '../../../components/VideoModal'

const socials = [
	{
		svg: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="2"
					y="2"
					width="20"
					height="20"
					rx="4"
					stroke="#777E91"
					stroke-width="1.5"
				/>
				<circle cx="18" cy="6" r="1" fill="#777E91" />
				<circle cx="12" cy="12" r="5" stroke="#777E91" stroke-width="1.5" />
			</svg>
		),
		link: 'https://www.instagram.com/kreiszistvan/',
	},
	{
		svg: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.66725 20L7.64668 20.7497C7.65353 20.7499 7.66039 20.75 7.66725 20.75V20ZM3 4.88889L3.5973 4.43531C3.40257 4.17887 3.06587 4.07535 2.76071 4.17809C2.45554 4.28082 2.25 4.56689 2.25 4.88889H3ZM8.4 16.4444L8.92703 16.9781C9.1355 16.7722 9.20498 16.4637 9.10491 16.1883C9.00484 15.9129 8.75355 15.721 8.46152 15.697L8.4 16.4444ZM3 18.9503L2.92881 18.2037C2.63318 18.2319 2.38203 18.4319 2.28832 18.7137C2.19461 18.9955 2.276 19.306 2.49587 19.5056L3 18.9503ZM11.5889 8.96808V9.71808C11.8182 9.71808 12.0349 9.61318 12.1772 9.43333C12.3194 9.25349 12.3716 9.01845 12.3188 8.79532L11.5889 8.96808ZM21 4.88889L21.7148 5.11581C21.8205 4.78294 21.6824 4.42119 21.3819 4.24338C21.0813 4.06556 20.6977 4.11876 20.4569 4.37166L21 4.88889ZM19.0934 8.22229L18.6845 7.59355C18.4756 7.72941 18.3478 7.96016 18.3435 8.20932L19.0934 8.22229ZM18.2303 5.46181L17.6397 5.92409C17.7316 6.04143 17.8563 6.12874 17.9979 6.17491L18.2303 5.46181ZM12.2266 8C12.2266 6.17014 13.6304 4.75 15.286 4.75V3.25C12.7338 3.25 10.7266 5.41158 10.7266 8H12.2266ZM7.87297 15.9108C6.64696 17.1217 4.70491 18.0344 2.92881 18.2037L3.07119 19.6969C5.18808 19.4951 7.45304 18.4338 8.92703 16.9781L7.87297 15.9108ZM11.5889 8.21808C9.41235 8.21808 6.0951 7.7246 3.5973 4.43531L2.4027 5.34246C5.3049 9.16429 9.18765 9.71808 11.5889 9.71808V8.21808ZM12.3188 8.79532C12.2587 8.54165 12.2266 8.27535 12.2266 8H10.7266C10.7266 8.3923 10.7724 8.77454 10.8591 9.14084L12.3188 8.79532ZM7.68782 19.2503C7.11342 19.2345 6.19427 19.1649 5.32735 19.0096C4.89389 18.932 4.49028 18.8358 4.15659 18.7211C3.80851 18.6015 3.60127 18.4832 3.50413 18.395L2.49587 19.5056C2.81745 19.7976 3.25212 19.9964 3.66909 20.1397C4.10046 20.288 4.58504 20.4005 5.06286 20.4861C6.01851 20.6573 7.01426 20.7324 7.64668 20.7497L7.68782 19.2503ZM20.2852 4.66196C20.2064 4.91014 20.0456 5.49166 19.7598 6.1201C19.464 6.77086 19.0959 7.326 18.6845 7.59355L19.5023 8.85104C20.2878 8.34021 20.8025 7.45109 21.1253 6.74095C21.4584 6.00851 21.6524 5.31252 21.7148 5.11581L20.2852 4.66196ZM18.3435 8.20932C18.2371 14.3599 13.465 19.25 7.66725 19.25V20.75C14.3512 20.75 19.7239 15.1344 19.8433 8.23527L18.3435 8.20932ZM17.9979 6.17491C18.6255 6.3794 19.308 6.38664 19.9164 6.25698C20.5182 6.12875 21.1199 5.85046 21.5431 5.40612L20.4569 4.37166C20.2969 4.53962 19.9987 4.70578 19.6038 4.78992C19.2156 4.87264 18.8048 4.86019 18.4627 4.74871L17.9979 6.17491ZM15.286 4.75C16.2239 4.75 17.072 5.1988 17.6397 5.92409L18.8209 4.99952C17.9913 3.93973 16.7204 3.25 15.286 3.25V4.75ZM8.46152 15.697C7.26444 15.5984 3.75 13.6473 3.75 4.88889H2.25C2.25 13.9082 5.93556 16.9941 8.33848 17.1919L8.46152 15.697Z"
					fill="#777E91"
				/>
			</svg>
		),
		link: 'https://twitter.com/IKreisz',
	},
	{
		svg: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.9352 3.30067C15.4791 2.47281 13.7948 2 12 2C9.53976 2 7.28704 2.88844 5.54515 4.36199M16.9352 3.30067C12.1441 7.93021 9.1272 14.3843 9.00393 21.5434M16.9352 3.30067C19.5439 4.78379 21.4202 7.40643 21.887 10.4915M5.54515 4.36199C8.23859 8.36586 12.8117 11 18 11C19.3443 11 20.6473 10.8232 21.887 10.4915M5.54515 4.36199C3.37676 6.19634 2 8.93739 2 12C2 16.4791 4.94479 20.2704 9.00393 21.5434M2 12.8535C3.56389 12.3008 5.24682 12 7 12C12.1951 12 16.7733 14.641 19.4653 18.6536M9.00393 21.5434C9.94983 21.8401 10.9562 22 12 22C14.968 22 17.6339 20.707 19.4653 18.6536M19.4653 18.6536C21.0419 16.886 22 14.5549 22 12C22 11.4872 21.9614 10.9835 21.887 10.4915"
					stroke="#777E91"
					stroke-width="1.5"
				/>
			</svg>
		),
	},
]

const Hero = () => {
	// const [modal, setModal] = useState(false)

	// const closeModal = () => {
	// 	setModal(false)
	// }

	// const openModal = () => {
	// 	setModal(!modal)
	// }

	return (
		<motion.div variants={container} initial="hidden" animate="show">
			<div className={cn('section', styles.section)}>
				<div className={cn('container', styles.container)}>
					<div className={styles.content}>
						<div className={styles.image_background}>
							<img className={styles.image} src="/portrait.jpg" />
						</div>

						<motion.div variants={item}>
							<h1 className={cn('hero', styles.title)}>Istvan Kreisz</h1>
						</motion.div>
						<motion.div variants={item}>
							<p className={cn('h4', styles.secondaryTitle)}>iOS and Web developer</p>
						</motion.div>

						<motion.div variants={item}>
							<p className={cn('body', styles.subtitle)}>
								Your goal is to throw the most epic party for your friends and
								family? I am in! If you’re interested in having me photograph your
								wedding, I’d love for you to get in touch.
							</p>
						</motion.div>
					</div>

					{/* <div className={styles.button_wrapper}>
						<motion.button
							variants={item}
							className={cn('button', styles.play_button)}
							onClick={openModal}
						>
							<svg
								width="44"
								height="44"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.99228 18.2901L9.36438 18.9413L8.99228 18.2901ZM16.9611 13.7365L16.589 13.0853L16.9611 13.7365ZM16.9611 10.2635L17.3333 9.61233L16.9611 10.2635ZM8.99228 5.70987L8.62017 6.36105L8.62017 6.36106L8.99228 5.70987ZM9.36438 18.9413L17.3333 14.3877L16.589 13.0853L8.62017 17.6389L9.36438 18.9413ZM17.3333 9.61233L9.36438 5.05869L8.62017 6.36106L16.589 10.9147L17.3333 9.61233ZM17.3333 14.3877C19.1807 13.332 19.1807 10.668 17.3333 9.61233L16.589 10.9147C17.4288 11.3946 17.4288 12.6054 16.589 13.0853L17.3333 14.3877ZM8.62017 17.6389C7.78685 18.1151 6.75 17.5134 6.75 16.5536H5.25C5.25 18.6652 7.53108 19.9889 9.36438 18.9413L8.62017 17.6389ZM9.36438 5.05869C7.53108 4.01109 5.25 5.33485 5.25 7.44636H6.75C6.75 6.48658 7.78685 5.88487 8.62017 6.36105L9.36438 5.05869ZM5.25 7.44636V16.5536H6.75V7.44636H5.25Z" />
							</svg>
						</motion.button>

						<p className={cn('body-2-bold')}>Play Video</p>
					</div> */}

					<div className={styles.social_wrapper}>
						{socials.map((item, index) => (
							<a href={item.link}>
								<motion.div
									variants={{ svg: item.svg }}
									key={index}
									className={styles.social_icon}
								>
									{item.svg}
								</motion.div>
							</a>
						))}
					</div>

					{/* {modal ? (
						<section className={cn('background')}>
							<div className={cn('align')}>
								<VideoModal
									embed="https://www.youtube.com/embed/nTpqgeqaNa4"
									closeModal={closeModal}
									setModal={setModal}
								/>
							</div>
						</section>
					) : null} */}
				</div>
			</div>
		</motion.div>
	)
}

export default Hero
