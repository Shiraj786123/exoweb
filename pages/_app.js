import Head from 'next/head';
import Script from 'next/script';
import { Poppins } from 'next/font/google';

import { AuthProvider } from '../src/context/AuthContext.jsx';
import Chatbot from '../src/components/Chatbot';

import '../src/index.css';
import '../src/App.css';
import '../src/styles/contact.css';
import '../src/styles/ExpertPopup.css';
import '../src/styles/footer.css';
import '../src/styles/growNow.css';
import '../src/styles/navbar.css';
import '../src/styles/hero-main.css';
import '../src/styles/homeServices.css';
import '../src/styles/homeAreas.css';
import '../src/styles/breadcrumb.css';
import '../src/styles/cityPage.css';
import '../src/styles/richCity.css';
import '../src/styles/process.css';
import '../src/styles/publishSection.css';
import '../src/styles/Review.css';
import '../src/styles/solution.css';
import '../src/styles/soMuchMore.css';
import '../src/styles/EcommercePage.css';
import '../src/styles/ecommercePageBody.css';
import '../src/styles/websitePageBody.css';
import '../src/styles/softwarePageBody.css';
import '../src/styles/mobilePageBody.css';
import '../src/styles/mobileAppScreens.css';
import '../src/styles/seoPageBody.css';
import '../src/styles/serviceProcessSection.css';
import '../src/styles/servicePageInteractions.css';
import '../src/styles/successsection.css';
import '../src/styles/threeSteps.css';
import '../src/styles/WebsiteGrowthSlider.css';
import '../src/styles/whoweare.css';
import '../src/styles/WhyChoose.css';
import '../src/styles/AboutUs.css';
import '../src/styles/AdminDashboard.css';
import '../src/styles/AIOptimizationPage.css';
import '../src/styles/AISoftwareServices.css';
import '../src/styles/aiSoftwarePageBody.css';
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
import '../src/styles/mobile-responsive.css';
import '../src/styles/chatbot.css';
import '../src/styles/ctaBanner.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={poppins.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <link rel="icon" href="/navlogofavicon.png?v=2" type="image/png" />
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
      <Chatbot />
      </div>
    </AuthProvider>
  );
}