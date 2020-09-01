import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Author } from "../models/Author";
import { CreateAuthorInput } from "../inputs/AuthorBookInput";

@Resolver()
export class AuthorResolver {

  @Query(() => Author)
  author(@Arg("id") id: number) {
    return Author.findOne({ where: { id } });
  }

  @Mutation(() => Author)
  async addAuthor(@Arg("data") data: CreateAuthorInput) {
    const author = Author.create(data);
    await author.save();
    return author;
  }

}
