## details

node version 16.14.0

## Install

```
git clone https://github.com/greenreign/nestjs-perf-test.git
cd nestjs-perr-test
yarn
```

## Test with jest

```
yarn test:e2e:heap
```

Typical Output

```
 PASS  test/app49.e2e-spec.ts (156 MB heap size)
 PASS  test/app7.e2e-spec.ts (170 MB heap size)
 PASS  test/app34.e2e-spec.ts (178 MB heap size)
 PASS  test/app47.e2e-spec.ts (186 MB heap size)
 PASS  test/app46.e2e-spec.ts (194 MB heap size)
 PASS  test/app21.e2e-spec.ts (203 MB heap size)
 ...
 ...
 ...
 PASS  test/app20.e2e-spec.ts (509 MB heap size)
 PASS  test/app10.e2e-spec.ts (517 MB heap size)
 PASS  test/app23.e2e-spec.ts (525 MB heap size)
 PASS  test/app14.e2e-spec.ts (533 MB heap size)
 PASS  test/app31.e2e-spec.ts (541 MB heap size)
 PASS  test/app8.e2e-spec.ts (549 MB heap size)
 PASS  test/app24.e2e-spec.ts (557 MB heap size)
```

## Test without jest

```
yarn start
```

- you can play with the iterations in `main.ts`

Typical output

```
{ rss: '39 MB', heapTotal: '18 MB', heapUsed: '8 MB' }
{ rss: '115 MB', heapTotal: '78 MB', heapUsed: '44 MB' }
```
