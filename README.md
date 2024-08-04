# My Sika Box - Country Information Web Application

## Introduction

This project is a web application that displays information about countries using the REST Countries API. The application features:

- A list of countries with their flags and names.
- Detailed information on individual countries, including their capital, population, languages spoken, timezone, and currency.
- A search bar to filter the list of countries by name.

The goal was to create a clean, user-friendly interface using modern coding practices and frameworks.

## Links

- Hosted Solution: [My Sika Box - Vercel](https://sika-box-test.vercel.app/)
- GitHub Repository: [sika-box-test](https://github.com/stivo-m/sika-box-test)

## Setup Instructions

If you are using Docker, then you can simply run the following in the root of the project to spin up the react application:

```bash
# Build the docker image: Note that you must pass the server url as an environment variable
docker build \
   --build-arg VITE_SERVER_URL=https://restcountries.com/v3.1/ \
   -t steven-my-sika-box .

# Run the docker image
docekr run -p 3000:3000 steven-my-sika-box
```

---

If you would like to do the manual setup to have the project run locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/stivo-m/sika-box-test.git
   cd sika-box-test
   ```

2. **Install dependencies:**

Ensure you are using Node.js version v20.11.1 and have pnpm installed. Then run:

```bash
pnpm install
```

3. **Set up environment variables:**

Copy the .env.example file to .env and configure the necessary environment variables. The server URL will be contained in this file:

```bash
cp .env.example .env
```

4. **Run the development server:**

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

## Tech Stack

- Tailwind CSS with shadcn: For styling the application. More details at shadcn.
- React Query: For managing server state and API calls.
- React: As the main library for building the user interface.
- Vite: For bundling the project and fast development.
