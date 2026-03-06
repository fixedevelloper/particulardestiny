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
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300","400","500","600","700"],
    display: "swap",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className="poppins.className home-luxury-hotel-2 bg-repeat"
            style={{
               // backgroundImage: "url('/img/bg/body-bg_shape.png')",
            }}
        >
        <AppProvidersWrapper>
            {children}
        </AppProvidersWrapper>
        </body>
        </html>
    );
}