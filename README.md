
**How to use:**

```
$ npm install
$ npm run start
```

mutation author add
```
mutation{
    addAuthor(
        data: {
        name: "King",
       
        }
    ) {
    authorId
    }
}
```


mutation book add

```
mutation{
    addBook(
        data: {
        name: "Second book",
        authorId: 2,
        pageCount: 55
        }
    ) {
    bookId
    }
}
```

Exampes query

```
query{
  books{
    bookId,
    name,
    author{
      name,
      authorId
    }
  }
}
```