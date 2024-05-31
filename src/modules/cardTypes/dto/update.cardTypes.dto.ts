import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  Length,
  MaxLength,
  IsNumber,
  IsIn,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { stringConstants } from 'src/utils/string.constant';
export class UpdateCardTypesDTO {
  @ApiProperty({
    example: 1,
    description: 'The ID of the cardType.',
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  siteCode?: string;

  @ApiProperty({
    description: 'Name of the card type methodology',
    maxLength: 25,
  })
  @IsString()
  @MaxLength(25)
  @IsNotEmpty()
  methodology: string;

  @ApiProperty({
    description: 'Name of the card type',
    maxLength: 45,
  })
  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of the card type',
    maxLength: 100,
  })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Color code of the card type',
    maxLength: 6,
  })
  @IsString()
  @Length(6)
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'Id of the responsible person (user)',
    maxLength: 100,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  responsableId?: number;

  responsableName?: string;

  email?: string;

  @ApiProperty({
    description: 'Quantity of pictures to create',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityPicturesCreate?: number;

  @ApiProperty({
    description: 'Quantity of audios to create',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityAudiosCreate?: number;

  @ApiProperty({
    description: 'Quantity of videos to create',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityVideosCreate?: number;

  @ApiProperty({
    description: 'Duration of audios to create',
    required: false,
  })
  @IsInt()
  @IsOptional()
  audiosDurationCreate?: number;

  @ApiProperty({
    description: 'Duration of videos to create',
    required: false,
  })
  @IsInt()
  @IsOptional()
  videosDurationCreate?: number;

  @ApiProperty({
    description: 'Quantity of pictures to close',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityPicturesClose?: number;

  @ApiProperty({
    description: 'Quantity of audios to close',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityAudiosClose?: number;

  @ApiProperty({
    description: 'Quantity of videos to close',
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantityVideosClose?: number;

  @ApiProperty({
    description: 'Duration of audios to close',
    required: false,
  })
  @IsInt()
  @IsOptional()
  audiosDurationClose?: number;

  @ApiProperty({
    description: 'Duration of videos to close',
    required: false,
  })
  @IsInt()
  @IsOptional()
  videosDurationClose?: number;

  @ApiProperty({
    description: 'Status',
    required: true,
    example: 'A or I',
    minimum: 1,
  })
  @IsNotEmpty()
  @IsString()
  @IsIn([stringConstants.activeStatus, stringConstants.inactiveStatus])
  status: string;

  updatedAt?: Date;
}