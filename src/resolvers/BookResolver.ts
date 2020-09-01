import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { CreateBookInput } from "../inputs/CreateBookInput";


@Resolver(of => Book)

export class BookResolver {

  @Query(() => String)
  hello() {
    return "world";
  }


  @FieldResolver()
  author(@Root() book: Book) {
    return Author.findOne({
      where: {
        authorId: book.authorId
      }
    })
  }

  @Query(() => [Book])
  books() {
    return Book.find()
  }

  @Query(() => Book)
  book(@Arg("id") id: string) {
    return Book.findOne({ where: { id } });
  }


  @Mutation(() => Book)
  async addBook(@Arg("data") data: CreateBookInput) {
    const book = Book.create(data);
    await book.save();
    return book;
  }

}
