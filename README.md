# My Sika Box - Country Information Web Application

## Introduction

This project is a web application that displays information about countries using the REST Countries API. The application features:

- A list of countries with their flags and names.
- Detailed information on individual countries, including their capital, population, languages spoken, timezone, and currency.
- A search bar to filter the list of countries by name.

The goal was to create a clean, user-friendly interface using modern coding practices and frameworks.

![Screenshot from 2024-08-04 23-27-00](https://github.com/user-attachments/assets/75923b41-f098-477d-81dc-b204ce6e1b64)

![Screenshot from 2024-08-04 23-27-14](https://github.com/user-attachments/assets/cac44c63-9040-45ef-aab7-5513ae49c0ae)


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
docker run -p 3000:3000 steven-my-sika-box
```

You should see the react project launched on your terminal, and have access to both the local and network environments for the react application. Copy and paste the Network url to your browser to access the application.

![Screenshot from 2024-08-04 23-25-07](https://github.com/user-attachments/assets/545cd2ce-4efa-483e-b56a-70f840bcf675)

---

If you would like to do the manual setup to have the project run locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/stivo-m/sika-box-test.git
   cd sika-box-test
   ```

2. **Install dependencies:**

Ensure you are using Node.js version v20.11.1 and have pnpm installed. You can find instructions on how to install NodeJS [Here](https://nodejs.org/en/download/package-manager). In the following sections, I will use **pnpm**. If you would like to follow along with pnpm, you can install it by running:

```bash
npm install -g pnpm
```

Alternatively, you can choose to use your preferred package manager, i.e npm or yarn and update the commands as necessar.

Firstly, run:

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
