# URL Shortening Service

A simple RESTful API that allows users to shorten long URLs. The API provides endpoints to create, retrieve, update, and delete short URLs. It also offers statistics on the number of times a short URL has been accessed.

## Features

- Shorten long URLs
- Retrieve original URLs using short codes
- Update existing short URLs
- Delete short URLs
- Track and retrieve access statistics for each short URL

## Technologies Used

- **Backend Framework:** Express
- **Database:** PostgreSQL
- **Language:** Typescript

## Getting Started

### Prerequisites

- NodeJS 20.17.0
- Docker

Execute docker-compose up -d to create postgreSQL container

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/soyeison/url-shortening-service-typescript.git
   cd url-shortening-service-typescript
   ```
2. Install dependencies:
   ```bash
   [For Node.js]: npm install or yarn install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   PORT=3000
   PORT=
   DATABASE_HOST=
   DATABASE_PORT=
   DATABASE_USERNAME=
   DATABASE_PASSWORD=
   DATABASE_NAME=
   ```
4. Run the application:
   ```bash
   [For Node.js]: npm dev or yarn run dev
   ```

## Project Structure

```
url-shortening-service/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── interfaces/
│   ├── entities/
│   ├── dto/
│   ├── data-source.ts
│   └── index.ts
├── package.json
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## Project Idea

This project is one of begginner projects in Roadmap.sh: https://roadmap.sh/projects/url-shortening-service
