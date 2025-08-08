// MODULES //
import { useEffect } from "react";

// COMPONENTS //
import Script from "next/script";
// SECTIONS //

// PLUGINS //

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //
import "@/styles/globals/globals.scss";

// IMAGES //

// DATA //

/** App Page */
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		SmoothScrolling();
	}, []);

	return (
		<>
			<Script id="gtm-script" strategy="afterInteractive">
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5NTDLJTN');`}
			</Script>
			{/* <!-- Google Tag Manager (noscript) --> */}
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-5NTDLJTN"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>
			{/* <!-- End Google Tag Manager (noscript) --> */}
			<Component {...pageProps} />
		</>
	);
}
