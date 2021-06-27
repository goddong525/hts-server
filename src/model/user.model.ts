import { AllowNull, AutoIncrement, Column, DataType, Model, HasMany, PrimaryKey, Table } from 'sequelize-typescript';
import UserStock from './userStock.model';

@Table
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(80))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(512))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  phone: string;

  @HasMany(() => UserStock)
  userStocks: UserStock[];
}
