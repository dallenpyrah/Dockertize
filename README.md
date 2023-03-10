> Empower your dev workflow with AI generated Dockerfiles

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dallenpyrah/Dockertize">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Dockertize</h3>

  <p align="center">
    Dockertize is a Dockerfile generation tool built with Node.js and TypeScript. With Dockertize, you can easily generate a Dockerfile for your project, specifying the base image, dependencies, ports, environment variables, files to copy, and entry point. The generated Dockerfile is optimized for production use, uses a multi-stage build to minimize the final image size, and follows best practices for security and performance.
    <br />
    <a href="https://probable-degree-a99.notion.site/Dockertize-Documentation-e242a154d9f64344bf68b1b560006e3b"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dallenpyrah/Dockertize">View Demo</a>
    ·
    <a href="https://github.com/dallenpyrah/Dockertize/issues">Report Bug</a>
    ·
    <a href="https://github.com/dallenpyrah/Dockertize/issues">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Typescript][Typescript.ts]][Typescript-url]
* [![Prisma][Prisma.p]][Prisma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Installation

To use Dockertize, you will need to have Node.js installed on your machine. You can install it from the official website: Node.js.

Once you have Node.js installed, you can install Dockertize using npm:

```
npm install -g dockertize
```

You will need to an OpenAI API key. You can get one for free by signing up here: [OpenAI][OpenAI-url]

Once you have your API key, you will need to run this command to set the environment variable:

```
dockertize-setup-env
```

Once your API key is set up, to use Dockertize simply run the following command:

```
dockertize
```

This will start the Dockerfile generation process. You will be prompted to provide information about your project, such as the base image, dependencies, ports, environment variables, files to copy, and entry point. Once you have provided all the necessary information, Dockertize will generate a Dockerfile for you in the same directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_For examples, please refer to the [Documentation](https://probable-degree-a99.notion.site/Dockertize-Documentation-e242a154d9f64344bf68b1b560006e3b)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dallenpyrah/Dockertize/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dallen Pyrah - [@dallenpyrah](https://twitter.com/dallenpyrah) - dallenpyrah@gmail.com

Project Link: [https://github.com/dallenpyrah/Dockertize](https://github.com/dallenpyrah/Dockertize)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Clack](https://github.com/natemoo-re/clack) - A big thank you to the developers of Clack for creating a powerful and user-friendly command-line interface tool that made it easy to build this project.
* [OpenAI](https://openai.com) - We would like to acknowledge OpenAI for developing cutting-edge natural language processing technology that helped power our Dockerfile generating CLI!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dallenpyrah/Dockertize.svg?style=for-the-badge
[contributors-url]: https://github.com/dallenpyrah/Dockertize/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dallenpyrah/Dockertize.svg?style=for-the-badge
[forks-url]: https://github.com/dallenpyrah/Dockertize/network/members
[stars-shield]: https://img.shields.io/github/stars/dallenpyrah/Dockertize.svg?style=for-the-badge
[stars-url]: https://github.com/dallenpyrah/Dockertize/stargazers
[issues-shield]: https://img.shields.io/github/issues/dallenpyrah/Dockertize.svg?style=for-the-badge
[issues-url]: https://github.com/dallenpyrah/Dockertize/issues
[license-shield]: https://img.shields.io/github/license/dallenpyrah/Dockertize.svg?style=for-the-badge
[license-url]: https://github.com/dallenpyrah/Dockertize/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Typescript.ts]: https://img.shields.io/badge/Typescript-T-blue
[Typescript-url]: https://www.typescriptlang.org
[Prisma.p]: https://img.shields.io/badge/Prisma-Next--generation%20Node.js%20and%20TypeScript%20ORM-purple
[Prisma-url]: https://www.prisma.io
[OpenAI-url]: https://auth0.openai.com/u/signup/identifier?state=hKFo2SA3cF81X011V0pvZXA5T2M3aEV6dWRIT29TRXlyZFhfQ6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFEyNFFxUFZhdjNZQ0R3NGo3UXNkR3RvaXVtZmNYbDlUo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q
[CockroachDB-url]: https://cockroachlabs.cloud/signup?referralId=9b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b
