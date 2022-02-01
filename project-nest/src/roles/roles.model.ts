import { UserRoles } from './user-roles.model';
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { User } from "src/users/users.model";

interface RoleCreationAttribute {
    value: string
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttribute> {

    @ApiProperty({example: '1', description: 'Unique identification'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ApiProperty({example: 'ADMIN', description: 'User role in the ecosystem'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @ApiProperty({example: 'Administrator', description: 'Role description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    user: User[]
}