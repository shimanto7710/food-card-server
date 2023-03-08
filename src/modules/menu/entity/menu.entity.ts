import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true, collection: 'menus' })
export class MenuEntity extends Document {
  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'restaurants',
  })
  restaurant_id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  quantity: number;

  @Prop({ required: true, type: String })
  type: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: Date })
  opening_time: Date;

  @Prop({ type: Date })
  closing_time: Date;

  @Prop({ default: true })
  is_active: boolean;
}

export const MenuSchema = SchemaFactory.createForClass(MenuEntity);
