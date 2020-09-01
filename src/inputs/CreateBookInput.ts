import { InputType, Field } from "type-graphql";

@InputType()
export class CreateBookInput {
  @Field()
  name: string;

  @Field()
  authorId: number;

  @Field()
  pageCount: number;

}
