# image-data-service
> little service to analyze given images

# Install

```bash
# clone porject
git clone https://github.com/HenrikFricke/image-data-service.git
cd image-data-service

# install dependencies
npm i

# use the right node version
nvm use

# fire up
npm start
```

# Usage

Just go to your browser, open [localhost:3000](http://localhost:3000) and
append a URL as param, for example:

[http://localhost:3000/?url=https://images.unsplash.com/photo-1465284958051-1353268c077d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0af3a963219638fe8c4b862219065031](http://localhost:3000/?url=https://images.unsplash.com/photo-1465284958051-1353268c077d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0af3a963219638fe8c4b862219065031)

```JSON
{
  "source": "https://images.unsplash.com/photo-1465284958051-1353268c077d?ixlib=rb-0.3.5",
  "dimension": {
    "width": 5184,
    "height": 3456
  },
  "colors": {
    "avg": {
      "r": 71,
      "g": 73,
      "b": 59
    },
    "min": {
      "r": 14,
      "g": 20,
      "b": 18
    },
    "max": {
      "r": 185,
      "g": 188,
      "b": 193
    }
  }
}
```
