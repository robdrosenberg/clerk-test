import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
	const { push } = useRouter();

  return (
	<ClerkProvider 
		// frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
		// navigate={(to) => push(to)}
		{...pageProps}
	>
		<Component {...pageProps} />
	</ClerkProvider>
  )
}

export default MyApp
