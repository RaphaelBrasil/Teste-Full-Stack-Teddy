import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  salary: string;

  @Column()
  company: string;

  @Column({ default: false })
  isSelected: boolean;
}
