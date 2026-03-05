import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

import {AppProvidersWrapper} from "./providers/AppProvidersWrapper";
export const metadata: Metadata = {
  title: {
    template: '%s | achat rapide et securisee',
    default: 'Particular destiny suites',
  },
  description: 'Etablissement hoteliare prestigieux situé au cœur du quartier Bonapriso .',
}
import { Noto_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';

const noto = Noto_Serif_Display({
    subsets: ['latin'],
    weight: ['100','200','300','400','500','600','700','800','900'],
    variable: '--font-noto',
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200','300','400','500','600','700','800'],
    variable: '--font-plusjakarta',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head />
        <body
            className="home-luxury-hotel-2 bg-repeat"
            style={{
                backgroundImage: "url('/img/bg/body-bg_shape.png')",
            }}
        >
        <AppProvidersWrapper>
            {children}
        </AppProvidersWrapper>
        </body>
        </html>
    );
}