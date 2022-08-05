import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Repository, EntityRepository } from 'typeorm';

@Entity('employees')
export class Employees extends BaseEntity {
 @PrimaryGeneratedColumn()
 employeeId: number;

  @Column()
  name : string;

  @Column()
  companyMail : string;

  @Column({nullable:true})
  phoneNumber : string;

  @Column({default:true})
  isActive: Boolean;


}


