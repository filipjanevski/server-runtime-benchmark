# Server runtime benchmarks

These tests were run on a Macbook Air M2 with the following configuration:

- 8 threads
- 256 concurent requests
- 30 second test duration

Command:

```bash
wrk -t8 -c256 -d30s http://127.0.0.1:8000
```

# Runtimes

## [Bun](https://bun.sh/)

Version 0.4.0

Command:

```bash
bun run server.ts
```

## [Deno](https://deno.land/)

Version 1.29.4

Command:

```bash
deno run --allow-all server.ts
```

## [Node](https://nodejs.org/)

Version 18.12.1

Command:

```bash
node server.js
```

## [Node](https://nodejs.org/) + [Express](https://expressjs.com/)

Version 18.12.1
Version 4.18.2

Command:

```bash
node server.js
```

## [Go](https://go.dev/)

Version 1.19.5

Command:

```bash
go run server.go
```

## [Go](https://go.dev/) + [Fiber](https://gofiber.io/)

Go Version 1.19.5
Fiber Version 2.41.0

Command:

```bash
go run server.go
```

## [Rust](https://www.rust-lang.org/) + [Actix](https://actix.rs/)

Rust Version 1.66.1
Cargo Version 1.66.1
Actix Version 4.2.1

Command:

```bash
cargo run --release
```

# Results

|              | Bun       | Deno      | Node     | Node+Express | Go        | Go+Fiber  | Rust+Actix |
| ------------ | --------- | --------- | -------- | ------------ | --------- | --------- | ---------- |
| Requests/sec | 228997.33 | 103203.95 | 88899.06 | 21940.37     | 212955.97 | 238616.66 | 224502.10  |
| Transfer/sec | 27.95MB   | 13.48MB   | 12.97MB  | 5.02MB       | 26.20MB   | 29.36MB   | 18.84MB    |
