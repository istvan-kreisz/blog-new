import Head from 'next/head'
import Hero from '../pages-lib/home/Hero'
import Projects from '../pages-lib/home/Projects'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Istvan Kreisz&apos;s website</title>
				<meta
					name="description"
					content="Kreisz Istvan - Experienced Web and iOS developer"
				/>
				{/* og */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Kreisz Istvan's website" />
				<meta
					property="og:description"
					content="Kreisz Istvan - Experienced Web and iOS developer"
				/>
				<meta property="og:site_name" content="Kreisz Istvan's website" />
				{/* twitter */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@IKreisz" />
				<meta name="twitter:title" content="Kreisz Istvan's website" />
				<meta
					name="twitter:description"
					content="Kreisz Istvan - Experienced Web and iOS developer"
				/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Hero />
			<Projects />
		</>
	)
}
