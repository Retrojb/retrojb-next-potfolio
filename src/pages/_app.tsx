import Layout from '../components/layout';
import {Metadata} from "next";
import {AppProps} from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import '@retrojb/styles/globals.css'
export const metadata: Metadata = {
    title: 'RetroJB Portfolio',
    description: 'Personal developer portfolio',
}
export default function RetroJBPortfolioApp({ Component, pageProps}: AppProps) {

    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}