# Contributing

Thank you for your interest in contributing to the potato.

## Scope

This project serves one (1) hashed potato. Contributions that change the number of potatoes are out of scope.

## Before opening a pull request

1. Verify the hash:

   ```sh
   printf potato | sha1sum
   ```

   The output must be `3e2e95f5ad970eadfa7e17eaf73da97024aa5359`.
2. If you changed `style.css` or `potato.js`, update the `integrity` attributes in `index.html`.
3. Run `reuse lint`.

## Proposals we will decline

- Migrating to SHA-256 (it does not fit in a DNS label)
- Adding a second potato
