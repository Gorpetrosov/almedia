interface Offer {
  campaign_id: number;
  store_id: number | null;
  tracking_type: string;
  campaign_vertical: string;
  currency_name_singular: string;
  currency_name_plural: string;
  network_epc: string;
  icon: string;
  name: string;
  tracking_url: string;
  instructions: string;
  disclaimer: string | null;
  description: string;
  short_description: string;
  offer_sticker_text_1: string;
  offer_sticker_text_2: string | null;
  offer_sticker_text_3: string | null;
  offer_sticker_color_1: string;
  offer_sticker_color_2: string;
  offer_sticker_color_3: string;
  sort_order_setting: number | null;
  category_1: string;
  category_2: string | null;
  amount: number;
  payout_usd: number;
  start_datetime: string;
  end_datetime: string;
  is_multi_reward: boolean;
}

interface Country {
  include: Record<string, {
    id: number;
    code: string;
    name: string;
  }>;
  exclude: string[];
}

interface State {
  include: string[];
  exclude: string[];
}

interface City {
  include: string[];
  exclude: string[];
}

interface ConnectionType {
  cellular: boolean;
  wifi: boolean;
}

interface Device {
  include: string[];
  exclude: string[];
}

interface OS {
  android: boolean;
  ios: boolean;
  web: boolean;
  min_ios: string | null;
  max_ios: string | null;
  min_android: string | null;
  max_android: string | null;
}

export interface OfferSecondItem {
  Offer: Offer;
  Country: Country;
  State: State;
  City: City;
  Connection_Type: ConnectionType;
  Device: Device;
  OS: OS;
}
