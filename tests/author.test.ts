import 'cross-fetch/polyfill';
require('isomorphic-fetch');
import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";

var rp = require('request-promise');
const API = `http://localhost:${process.env.PORT_TEST}/`;

describe('Test request', () => {
  
  it('Hello request', async () => {
    const query = `{
             hello
          }  
        `;

    const response = await rp(
      {
        method: 'POST',
        uri: API,
        body: { query },
        json: true
      }
    ).promise();
    // expect(response).toMatchSnapshot();
    let res = expect(response.data).toEqual({ hello: 'World-Z' })

    console.log('-----res- POST-----', res)
  });
});
