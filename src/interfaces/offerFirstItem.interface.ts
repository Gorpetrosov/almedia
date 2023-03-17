interface Offer {
  offer_id: string;
  offer_name: string;
  offer_desc: string;
  call_to_action: string;
  disclaimer: string;
  offer_url: string;
  image_url: string;
  image_url_220x124: string;
  platform: string;
  payout: number;
  payout_type: string;
  amount: number;
  countries: string[];
  device: string;
  category: {
    [key: string]: string;
  };
  last_modified: number;
  preview_url: string;
  package_id: string;
  verticals: {
    verticalId: string;
    verticalName: string;
  }[];
}

export interface OfferFirstItem {
  currency_name: string;
  offersCount: number;
  offers: Offer[];
}
