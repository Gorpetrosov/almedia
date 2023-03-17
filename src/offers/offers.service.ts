import { Injectable } from '@nestjs/common';
import { OfferDto } from '@/offers/dto/offer.dto';
import { OfferBoxSizeEnum } from '@/enums/offerBoxSize.enum';
import { OfferSecondItem } from '@/interfaces/offerSecondItem.interface';
import { IOffer } from '@/interfaces/offer.interface';
import { OfferFirstItem } from '@/interfaces/offerFirstItem.interface';

@Injectable()
export class OffersService {
  async getAllTypeRequestsAndTransformIntoSingleOne(
    payloadOne,
    payloadTwo,
  ): Promise<IOffer[]> {
    const responseOneListData =
      this.transformResponseOneToSingleEntity(payloadOne);
    const responseTwoListData =
      this.transformResponseTwoToSingleEntity(payloadTwo);
    return [...responseOneListData, ...responseTwoListData];
  }

  private transformResponseOneToSingleEntity(
    payload: OfferFirstItem,
  ): IOffer[] {
    const responseOneListData = [];
    payload.offers.forEach((offer) => {
      responseOneListData.push(
        new OfferDto({
          id: offer.package_id,
          name: offer.offer_name,
          // eslint-disable-next-line prettier/prettier
          slug: offer.offer_name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-'),
          description: offer.offer_desc,
          requirements: offer.disclaimer,
          thumbnail: offer.image_url_220x124,
          boxSize: OfferBoxSizeEnum.MEDIUM,
          isDesktop: offer.platform === 'desktop',
          isAndroid:
            offer.platform === 'mobile' && offer.device !== 'iphone_ipad',
          isIos: offer.platform === 'mobile' && offer.device === 'iphone_ipad',
          offerUrlTemplate: offer.offer_url,
          providerName: payload.currency_name,
          externalOfferId: offer.offer_id,
        }),
      );
    });
    return responseOneListData;
  }

  private transformResponseTwoToSingleEntity(
    payload: OfferSecondItem,
  ): IOffer[] {
    const responseTwoListData = [];
    const payloadTwoListData = Object.values(payload);
    payloadTwoListData.forEach((offerObject: OfferSecondItem) => {
      responseTwoListData.push(
        new OfferDto({
          id: String(offerObject.Offer.campaign_id),
          name: offerObject.Offer.name,
          slug: offerObject.Offer.tracking_type,
          description: offerObject.Offer.description,
          requirements: offerObject.Offer.instructions,
          thumbnail: offerObject.Offer.icon,
          boxSize: OfferBoxSizeEnum.MEDIUM,
          isDesktop: offerObject.OS.web,
          isAndroid: offerObject.OS.android,
          isIos: offerObject.OS.ios,
          offerUrlTemplate: offerObject.Offer.tracking_url,
          providerName: offerObject.Offer.currency_name_plural,
          externalOfferId: String(offerObject.Offer.campaign_id),
        }),
      );
    });
    return responseTwoListData;
  }
}
