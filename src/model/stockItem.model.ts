import { AllowNull, AutoIncrement, Column, DataType, Model, HasMany, PrimaryKey, Table } from 'sequelize-typescript';
import Order from './order.model';
import StockItemHistory from './stockItemHistory.model';

@Table
export default class StockItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(80))
  name: string;

  @HasMany(() => Order)
  order: Order[];

  @HasMany(() => StockItemHistory)
  histories: StockItemHistory[];
}
