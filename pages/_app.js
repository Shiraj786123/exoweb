import Head from 'next/head';
import Script from 'next/script';

import { AuthProvider } from '../src/context/AuthContext';

import '../src/index.css';
import '../src/App.css';
import '../src/styles/contact.css';
import '../src/styles/ExpertPopup.css';
import '../src/styles/footer.css';
import '../src/styles/growNow.css';
import '../src/styles/navbar.css';
import '../src/styles/hero-main.css';
import '../src/styles/process.css';
import '../src/styles/publishSection.css';
import '../src/styles/Review.css';
import '../src/styles/solution.css';
import '../src/styles/soMuchMore.css';
import '../src/styles/EcommercePage.css'; // Adjust the relative path to point to your CSS file
import '../src/styles/successsection.css';
import '../src/styles/threeSteps.css';
import '../src/styles/WebsiteGrowthSlider.css';
import '../src/styles/whoweare.css';
import '../src/styles/WhyChoose.css';
import '../src/styles/AboutUs.css';
import '../src/styles/AdminDashboard.css';
import '../src/styles/AIOptimizationPage.css';
import '../src/styles/AISoftwareServices.css';
import '../src/styles/AIWebAppPage.css';
import '../src/styles/AIWebsiteDesign.css';
import '../src/styles/AuthFigma.css';
import '../src/styles/CaseStudies.css';
import '../src/styles/ContactPage.css';
import '../src/styles/ContactUs.css';

import '../src/styles/FullStackWebDev.css';
import '../src/styles/googleSearchConsole.css';
import '../src/styles/PrivacyPolicy.css';
import '../src/styles/SEOServices.css';
import '../src/styles/softwareDevelopment.css';
import '../src/styles/TermsConditions.css';
import '../src/styles/UserProfile.css';
import '../src/styles/WebsiteMaintenance.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <link rel="icon" href="/zonzotech-favicon.png?v=2" type="image/png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WCJCWD3FXL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WCJCWD3FXL');
        `}
      </Script>
      <Component {...pageProps} />
    </AuthProvider>
  );
}