Technical Assignment for Connex

## Getting started

Except for the regular suspects; git, Node, npm, you need these things for the app to work.
Used node v19.

## Troubleshooting

Using npm audit I found there were deprecated packages in my dependencies, after investigating further and adding and removing different packages,
I discovered "express-prometheus-middleware" has security issues and was last updated the 24/4/2021.

## Installation

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/MarcoLupo94/connex-tech-test.git
   cd Connex
   ```

2. Install dependencies.

   ```bash
   npm install
   cd client
   npm install
   ```

3. In the root folder you can run `npm run dev` to start the server.
4. To launch the client you can run `npm run start` from the client folder.
5. Tests suits can be run by prompting `npm run test` from the root folder.
