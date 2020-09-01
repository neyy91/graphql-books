import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Author } from './Author'

@Entity()
@ObjectType()


export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({name:'id'})
  bookId: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Number)
  @Column()
  pageCount: number;

  @Field(() => Number)
  @Column()
  authorId: number;

  @Field({ nullable: true })
  author: Author;




}
