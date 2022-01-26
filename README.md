# Foobar

This is a nodejs based graph service for dealing with word pluralization.


## SETUP DOCKER

run below command in the terminal. also in order to download docker please refer to [docker installation](https://docs.docker.com/get-started/)

```bash
docker-compose up -d
```


## Installation

Use the package  npm package manager to install dependencies

```bash
npm install
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)