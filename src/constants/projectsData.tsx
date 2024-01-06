export type ProjectData = {
	image: string
	title: string
	date: string
	link: string
	text: JSX.Element
}

const projectsData: { title: 'iOS Projects' | 'Web Projects'; projects: ProjectData[] }[] = [
	{
		title: 'iOS Projects',
		projects: [
			{
				image: 'projects/Vivid.png',
				title: 'Vivid',
				date: 'March 2023 - May 2023',
				link: 'https://apps.apple.com/us/app/vivid-ai-art-generator/id6446010189?platform=iphone',
				text: (
					<>
						Vivid was a freelance project. It&apos;s an{' '}
						<strong>AI image generator iOS app</strong> with preset styles and a public
						feed where you can browse through AI art created by other users. I built it
						using <strong>SwiftUI and MVVM-C</strong> architecture. The app uses{' '}
						<strong>
							Firebase for authentication, database (Firestore) and static file
							storage (Firebase Storage)
						</strong>
						. The images are generated with the <strong>Stable Diffusion API</strong> on
						a <strong>serverless backend running on Google Cloud Functions</strong>{' '}
						written in <strong>Typescript</strong>.
					</>
				),
			},
			{
				image: 'projects/CopDeck.png',
				title: 'CopDeck',
				date: 'Sept 2021 - Apr 2022',
				link: 'https://copdeck.com',
				text: (
					<>
						I developed and released a{' '}
						<strong>sneaker price comparison and inventory management iOS app</strong>{' '}
						for sneaker resellers that included a web scraping algorithm built on{' '}
						<strong>Google Cloud back-end</strong>, and the{' '}
						<strong>CopDeck landing page</strong> built with{' '}
						<strong>Next.js, TypeScript, Tailwind and Netlify</strong> and a desktop app
						built with <strong>Electron</strong>.{' '}
					</>
				),
			},
			{
				image: 'projects/Sidelineswap.png',
				title: 'SidelineSwap',
				date: 'Oct 2021 - Aug 2022',
				link: 'https://apps.apple.com/us/app/sidelineswap/id1215421737',
				text: (
					<>
						SidelineSwap is an <strong>e-commerce store</strong> for used sporting
						goods. I was hired to execute a revamp of the company’s iOS app including UX
						on existing screens and new features. I{' '}
						<strong>improved the software architecture</strong> by implementing the{' '}
						<strong>MVVM-C</strong> pattern, modernized the app UI (using{' '}
						<strong>UIKit</strong>), refactored and performed bug fixes in legacy code
						and <strong>rebuilt the payment checkout flow</strong>.
					</>
				),
			},
			{
				image: 'projects/LabTwin.jpg',
				title: 'LabTwin',
				date: 'Jan 2019 - Sept 2020',
				link: 'https://www.labtwin.com/product',
				text: (
					<>
						LabTwin was a niche{' '}
						<strong>digital assistant for pharmaceutical industry scientists</strong>{' '}
						used to improve productivity by reducing note-taking. I joined LabTwin’s iOS
						team during a scale-up with development focused on the persistence layer,
						new features and screens, and contribution to{' '}
						<strong>CI pipelines and unit testing</strong>. I wrote automated tests in{' '}
						<strong>XCTest, Fastlane, and CircleCI</strong> that eliminated database
						migration issues, integrated{' '}
						<strong>AWS Amplify for user authentication</strong>. I{' '}
						<strong>developed scalable persistence layer using Realm</strong>, UI
						components in UIKit and <strong>built synchronization module</strong> to
						keep local data in sync with the server.
					</>
				),
			},
			{
				image: 'projects/BallSmasher.jpg',
				title: 'Ball Smasher',
				date: 'Apr 2018 - Dec 2018',
				link: 'https://apps.apple.com/us/app/ball-smasher/id1381559021',
				text: (
					<>
						Soon after college I <strong>co-founded</strong> Snake Bacon, which was a{' '}
						<strong>video game company</strong> that developed Ball Smasher for iOS. I
						partnered with two friends to develop and launch the Ball Smasher game for
						iOS monetized with in-app purchases. I developed game engine code using{' '}
						<strong>SpriteKit</strong>. We negotiated a revenue share agreement with{' '}
						<a href="https://lionstudios.cc">
							<strong>Lion Studios</strong>
						</a>{' '}
						for publishing and marketing the game, after which the app reached the top
						of iOS App Store charts, achieving{' '}
						<strong> 7M+ downloads and 4.5/5 rating from 64K+ reviews</strong>.
					</>
				),
			},
			{
				image: 'projects/Games.png',
				title: 'Casual iOS games',
				date: '',
				link: 'https://apps.apple.com/us/developer/istvan-kreisz/id1279423840',
				text: (
					<>
						I made a number of simple iOS games, including{' '}
						<strong>a typing practice app</strong>, a drawing game and{' '}
						<strong>a geography quiz game</strong>. In total my games have reached{' '}
						<strong>over 200k downloads</strong> on the App Store.
					</>
				),
			},
		],
	},
	{
		title: 'Web Projects',
		projects: [
			{
				image: 'projects/Pixelcut.png',
				title: 'Pixelcut',
				date: 'Nov 2023 - ',
				link: 'https://www.pixelcut.ai',
				text: (
					<>
						I joined Pixelcut&apos;s team as a <strong>frontend web developer</strong>.
						I&apos;ve been working on their online image editor software. My tasks have
						involved{' '}
						<strong>
							developing new features for the image editor and refactoring and
							improving parts of the codebase
						</strong>
						. The project is a{' '}
						<strong>React SPA, written entirely in TypeScript</strong>.
					</>
				),
			},
			{
				image: 'projects/ERI.png',
				title: 'ERI Design',
				date: 'Apr 2023 - ',
				link: 'https://www.eridesignstudio.com',
				text: (
					<>
						I&apos;ve been working as a web development contractor for ERI Design. My
						main project has been developing a{' '}
						<strong>React-based CAD-like web application</strong> to help with the
						design and cost estimation of custom-built railing systems. I built new
						features, improved software architecture by breaking up large components and{' '}
						<strong>converted the 80k+ line JavaScript project to TypeScript</strong>.
					</>
				),
			},
			{
				image: 'projects/Hide&Seek.jpg',
				title: 'Hide & Seek World',
				date: 'June 2020 - ',
				link: 'https://hideandseek.world',
				text: (
					<>
						<strong>I independently designed and developed</strong> a{' '}
						<strong>real-time multiplayer game</strong> using{' '}
						<strong>Next.js, TypeScript, Firebase and Google Cloud Functions</strong>{' '}
						that currently reaches <strong>500 DAUs</strong> and has had{' '}
						<strong> 100k+ sign ups</strong>. Features include multiple game modes for
						2-100 players, leaderboards, private matches, and a games stats dashboard.
						Payments are processed through <strong>Stripe</strong>.
					</>
				),
			},
			{
				image: 'projects/GameGuideAI.png',
				title: 'GameGuide AI',
				date: 'May 2023 - ',
				link: 'https://gameguide.ai',
				text: (
					<>
						I developed a <strong>AI chatbot for gamers</strong> using{' '}
						<strong>
							OpenAI, LangChain, React, Next.js, TypeScript, Firebase and Google Cloud
							Functions
						</strong>
						. Currently, the chatbot can only answer questions about the popular game,
						Skyrim. The <strong>training data for the bot is scraped</strong> from the a
						Skyrim wiki website, and stored in <strong>a vector database</strong>.
					</>
				),
			},
			{
				image: 'projects/CopDeck.png',
				title: 'CopDeck',
				date: 'Sept 2021 - Apr 2022',
				link: 'https://copdeck.com',
				text: (
					<>
						I developed a{' '}
						<strong>sneaker price comparison and inventory management iOS app</strong>{' '}
						for sneaker resellers that included a web scraping algorithm run on{' '}
						<strong>Google Cloud Functions</strong>, and the{' '}
						<strong>CopDeck landing page</strong> built with{' '}
						<strong>Next.js, TypeScript, Tailwind and Netlify</strong> and a desktop app
						built with <strong>Electron</strong>.
					</>
				),
			},
			{
				image: 'projects/kreiszjanka.jpg',
				title: 'kreiszjanka.com',
				date: 'Jan 2023',
				link: 'https://kreiszjanka.com',
				text: (
					<>
						<strong>A portfolio website and webshop</strong> for my sister who is a
						jewellery maker. I built the site with{' '}
						<strong>
							Shopify, using some custom JavaScript and custom HTML components
						</strong>
						.
					</>
				),
			},
		],
	},
]

export { projectsData }
