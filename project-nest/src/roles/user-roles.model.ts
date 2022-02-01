import { Role } from './roles.model';
import { Column, DataType, Model, Table, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { User } from "src/users/users.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @ApiProperty({example: '1', description: 'Unique identification'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ForeignKey(() => Role)
    @ApiProperty({example: 'ADMIN', description: 'User role in the ecosystem'})
    @Column({type: DataType.INTEGER})
    roleId: number

    @ForeignKey(() => User)
    @ApiProperty({example: 'Administrator', description: 'Role description'})
    @Column({type: DataType.INTEGER})
    userId: number
}