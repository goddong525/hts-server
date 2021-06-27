import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import StockItem from './stockItem.model';

@Table
export default class StockItemHistory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @ForeignKey(() => StockItem)
  @Column
  stockItemid: bigint;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  date: Date;

  @AllowNull(false)
  @Column
  startPrice: number;

  @AllowNull(false)
  @Column
  endPrice: number;

  @AllowNull(false)
  @Column
  price: number;

  @BelongsTo(() => StockItem)
  stockItem: StockItem;
}
