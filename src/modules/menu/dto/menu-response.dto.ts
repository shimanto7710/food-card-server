import { ApiPropertyOptional } from '@nestjs/swagger';
import { BaseResponseDTO } from './../../shared/dto/base-response.dto';

export class MenuResponseDTO extends BaseResponseDTO {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  price: number;

  @ApiPropertyOptional()
  quantity: number;

  @ApiPropertyOptional()
  type: string;

  @ApiPropertyOptional()
  opening_time: Date;

  @ApiPropertyOptional()
  closing_time: Date;
}
