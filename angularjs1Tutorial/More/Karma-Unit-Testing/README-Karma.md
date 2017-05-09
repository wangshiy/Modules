# Unit Testing AngularJS with Karma

Here is some background information about what to test; not even specific to AngularJS.

http://gthill.blogspot.com/2009/12/unit-testing-what-to-test-right-bicep.html

Broadly, to fully test the project consider the idea of a "testing pyramid":

* A large number of unit tests, as they are fast to run and easy to write.
* A medium numberOf integration tests, as they are not as fast to run and not as
  easy to write.
* The fewest number of E2E tests, as they are the slowest to run and slowest to
  write.

This is a widely accepted and well proven idea, however on the other hand also
keep in mind that E2E tests are often the most valuable by far, and therefore
are often worth the greatest effort to write.

## Running this example

```
npm install
npm start
```
