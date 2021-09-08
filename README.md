# Word Race

This game is to test your typing speed

# Url
To play the game press [here](https://word-race-game.herokuapp.com/)

## Installation

To run the game in your local, download the repo and create a virtual env


```bash
sudo pip3 install virtualenv
```

```bash
cd word-race
virtualenv venv
```

Activate your virtual environment
```bash
source venv/bin/activate
```

Install requirement files
```bash 
pip install -r requirements.txt
```
Change API url to local url in /src/services/API.js

const baseUrl = "https://word-race-game.herokuapp.com"

to

const baseUrl = "http://127.0.0.1:8000"

Migrate database and runserver
```bash
python manage.py migrate
python manage.py runserver
```

Install node packages and run 
```bash 
npm install
npm start
```

# Game rules and assumptions
This is a word typing game, in which each level will have 20 words. The level will increase once the timer for that level is over.

Player will have to type the words correctly in order to clear them from a queue which will keep on increasing by adding new words over a fixed interval of time. A meter is also there which has limited capacity and will keep on increasing as the number of words in the queue increase and can be decreased on correctly typing the words. Once the meter if full any further addition of words will lead to game over. There is also a bonus word in each level on clearing of which will give you extra points.
On correct entering of a word player earns some score which will be base on the level (and multiplier) they are on.

After the game is over the player can replay or submit their score to the leader board where they can check top ten player and other game stats.

# Game Version
Version 1.0




