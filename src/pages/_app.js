import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (

		<Layout className='main'>
			<Component {...pageProps} />
		</Layout>

	)
}

export default MyApp
