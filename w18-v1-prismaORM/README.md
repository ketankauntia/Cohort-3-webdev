##Learning ORM's -> Prisma

```
npm init -y
npm i typescript
npx tsc --init

added dev script in package

npm i prisma
npx prisma init

```

```
    npx prisma migrate dev

    npx prisma generate
```

For seeding data, add this to package.json,
```
    "prisma":{
        "seed":"ts-node prisma/seed.ts"
    },
```