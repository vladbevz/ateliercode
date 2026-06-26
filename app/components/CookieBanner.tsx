'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const CONSENT_KEY = 'cookie_consent';

export default function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'refused' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as 'accepted' | 'refused' | null;
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setConsent('refused');
    setVisible(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wa1u7c5kzt");`,
            }}
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-P9LNZK8CL1"
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-P9LNZK8CL1');`,
            }}
          />
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-600 flex-1">
              Ce site utilise des cookies analytiques (Google Analytics, Microsoft Clarity) pour mesurer l&apos;audience et améliorer l&apos;expérience. Vous pouvez refuser sans impact sur votre navigation.{' '}
              <Link href="/politique-confidentialite" className="underline hover:text-gray-900 transition-colors">
                En savoir plus
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={refuse}
                className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-500 hover:text-gray-900 active:scale-[0.98] transition-all duration-150"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 active:scale-[0.98] transition-all duration-150"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
