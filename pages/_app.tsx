import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../src/css/index.css'
import MainLayout from '../src/js/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        import('bootstrap');
    }, []);

    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}

export default MyApp;