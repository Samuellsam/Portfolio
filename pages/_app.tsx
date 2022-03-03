import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../src/css/index.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'swiper/css';
import 'swiper/scss/pagination';
import "swiper/scss/effect-fade";
import 'swiper/scss/navigation';
import MainLayout from '../src/js/layouts/MainLayout';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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