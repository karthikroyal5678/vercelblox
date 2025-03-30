import { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  format?: string;
}

// Declare `adsbygoogle` globally to prevent TypeScript errors
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAd: React.FC<GoogleAdProps> = ({ adSlot, format = "autorelaxed" }) => {
  useEffect(() => {
    // Ensure adsbygoogle array exists
    if (typeof window !== "undefined" && window.adsbygoogle) {
      setTimeout(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense Error:", e);
        }
      }, 500);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4679619533362780"
      data-ad-slot={adSlot}
      data-ad-format={format}
    ></ins>
  );
};

export default GoogleAd;
