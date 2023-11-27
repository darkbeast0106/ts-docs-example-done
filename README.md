# Typedoc bemutató

A BMSZC Petrik Lajos technikum végzős szoftverfejlesztői számára typescript projekt dokumentálását bemutató repo.

A projekt tartalmaz példát:

* [Adattagok dokumentálására](./src/Person/Person.ts)
* [Függvények dokumentálására](./src/Person/PersonService.ts)

A dokumentációs kommentek alapján dokumentáció előállítására [TypeDoc](https://typedoc.org/) használható. Már telepítve lett az alábbi utasítás kiadásával:

```sh
npm install --save-dev typedoc
```

A dokumentáció előállításához az alábbi utasítás használható:

```sh
npx typedoc --entryPointStrategy expand ./src --exclude "**/*vite-env.*.ts"
```

Az utasítás a [package.json](./package.json) állományban felvett scripttel is futtatható.

```sh
npm run docs
```
