import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, ForeignKey, Table, BelongsTo } from 'sequelize-typescript';
import StockItem from './stockItem.model';
import User from './user.model';

@Table
export default class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  type: 'buy' | 'sell';

  @AllowNull(false)
  @Column(DataType.STRING(20))
  status: 'order' | 'confirm' | 'cancel';

  @ForeignKey(() => StockItem)
  @Column
  stockItemId: bigint;

  @ForeignKey(() => User)
  @Column
  userId: bigint;

  @AllowNull
  @Column
  unitPrice: number;

  @AllowNull
  @Column
  count: number;

  @AllowNull
  @Column
  totalPrice: bigint;

  @BelongsTo(() => StockItem)
  stockItem: StockItem;

  @BelongsTo(() => User)
  userItem: User;
}
