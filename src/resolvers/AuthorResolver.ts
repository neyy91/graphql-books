import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Author } from "../models/Author";
import { CreateAuthorInput } from "../inputs/AuthorBookInput";

@Resolver()
export class AuthorResolver {

  @Query(() => Author)
  author( id: number) { // @Arg("id")
    return Author.findOne({ where: { id } });
  }

  @Mutation(() => Author)
  async addAuthor( data: CreateAuthorInput) { // @Arg("data")
    const author = Author.create(data);
    await author.save();
    return author;
  }

}
