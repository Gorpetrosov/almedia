import { Controller, Get } from '@nestjs/common';
import { OffersService } from './offers.service';
import { offerOnePayload } from '@/offers/payloads/offerOne.payload';
import { offerTwoPayload } from '@/offers/payloads/offerTwo.payload';
import { IOffer } from '@/interfaces/offer.interface';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  async getAllTypeRequestsAndTransformIntoSingleOne(): Promise<IOffer[]> {
    const responseOne = await new Promise((resolve) => {
      resolve(offerOnePayload.response);
    });
    const responseTwo = await new Promise((resolve) => {
      resolve(offerTwoPayload.data);
    });

    return this.offersService.getAllTypeRequestsAndTransformIntoSingleOne(
      responseOne,
      responseTwo,
    );
  }
}
