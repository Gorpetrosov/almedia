import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { OfferBoxSizeEnum } from '@/enums/offerBoxSize.enum';

export class OfferDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsString()
  thumbnail: string;

  @IsEnum(OfferBoxSizeEnum)
  @Transform(({ value }) => OfferBoxSizeEnum[value])
  boxSize: OfferBoxSizeEnum;

  @IsBoolean()
  isDesktop: boolean;

  @IsBoolean()
  isAndroid: boolean;
  @IsBoolean()
  isIos: boolean;

  @IsString()
  offerUrlTemplate: string;

  @IsString()
  providerName: string;

  @IsString()
  externalOfferId: string;

  constructor(partial: Partial<OfferDto>) {
    Object.assign(this, partial);
  }
}
