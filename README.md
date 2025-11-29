# Portfolio Website

## Description
Personal portfolio website built with Vue 3, Vuetify and TypeScript.

## Installation
### Development
* Install all dependencies and run a dev server with:
```console
npm install
npm run dev
```
### Build
* Install all dependencies and build the raw html/css/javascript with:
```console
npm install
npm run build
```
### Docker
* Build the image with:
```console
docker build -f docker/Dockerfile -t $IMAGE_NAME .
```
## Usage
### Website (Central)
* Navigate to the homepage (portfolio.hartwolf.com)

### Website (WAR File)
* Use the installation instructions for the build artifacts
* Use your favorite web server, such as Nginx
* Navigate to the homepage

### Website (Docker)
* Use the installation instructions for using Docker
* Run the docker image with the appropriate options. For example:
```console
docker run --name $CONTAINER_NAME --restart unless-stopped -p 8080:80 $IMAGE_NAME
```

## Authors and acknowledgment
Walden Hart - Primary Author

## License
MIT License

Copyright (c) 2025 Walden Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
