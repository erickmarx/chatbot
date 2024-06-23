<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">An Chat Bot</h3>

  <p align="center">
    An simple chat bot API with simple frontend for example
    <br />
    <a href="https://erickmarx.github.io/chatbot/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">

[![Chat Bot][product-screenshot]](https://erickmarx.github.io/chatbot/)

</div>


An API project in NestJS with the aim of serving as a chatbot with history managed by Langchain with ChatGPT 3.5 and saved in Firestore that answers user questions.

Simple frontend to represent API usage.

API hosted on Google Cloud Platform using App Engine for hosting and Firestore for database.

### Built With
* [Typescript](https://www.typescriptlang.org/)
* [NestJS](https://nestjs.com/)
* [Langchain](https://js.langchain.com/v0.2/docs/introduction/)
* [GCP Firestore](https://firebase.google.com/docs/firestore?hl=pt-br)
* [GCP App Engine](https://cloud.google.com/appengine?hl=pt-BR)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install
  ```

* pnpm
  ```sh
  pnpm install
  ``` -->

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/erickmarx/chatbot.git
   ```
2. Configure the environment variables copying and renaming `.env.example` to `.env`
   ```js
   PORT=3000
   OPENAI_API_KEY=
   GOOGLE_PROJECT_ID=
   FIRESTORE_DATABASE_ID=
   FIRESTORE_PRIVATE_KEY=
   FIRESTORE_CLIENT_EMAIL=
   ```
3. Install PNPM packages
   ```sh
   pnpm install
   ```



<!-- USAGE EXAMPLES -->
## Usage
1. Start the aplication
    ```sh
      pnpm run build && pnpm run start
    ```

2. Make a POST http request to `/chat`
    ```curl
    curl --request POST \
    --url 'http://chat-ia-426719.ue.r.appspot.com/chat?sessionId=123' \
    --header 'Content-Type: application/json' \
    --data '{"content": "a example message to test chatbot"}'
    ```


<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- CONTACT -->
## Contact

Erick Marx - [Linkedin](https://www.linkedin.com/in/erickmarx/) - erickmarx5@gmail.com


[product-screenshot]: docs/images/example-frontend.png
[Nestjs-url]: https://nextjs.org/
[Firestore-url]: https://reactjs.org/
[Typescript-url]: https://vuejs.org/
[Langchain-ia-url]: https://angular.io/
[AppEngine-url]: https://svelte.dev/