import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NavBar from './../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLandingPage = router.pathname === '/';
  
  return (
  <div>
    {/* {!isLandingPage && <NavBar />}  */}
<NavBar />
    <div className='container'>
      <main className="bg-gray-100 min-h-screen">
       
        {/* {!pageProps && isLandingPage ? ( <LandingPage /> ) : ( <Component {...pageProps} /> )} */}
      </main> 
    </div>   
  </div>
  )
  
}

export default MyApp
