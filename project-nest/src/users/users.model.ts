import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'

interface UserCreationAttribute {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {

    @ApiProperty({example: '1', description: 'Unique identification'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ApiProperty({example: 'email@gmail.com', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: '123123', description: 'User pass'})
    @Column({type: DataType.STRING, allowNull: false})
    password: number

    @ApiProperty({example: 'true', description: 'Banned true'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: 'For commiting suicide', description: 'Ban reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}