import { Coffee } from './coffee.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Flavour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    (type) => Coffee,
    (coffee) => {
      coffee.flavours;
    },
  )
  coffees: Coffee[];
}
