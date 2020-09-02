## Install:

```sh
make install
```

## Run Demo:
Open two consoles:

```sh
make server
```

and 

```sh
make client
```

Go to [http://localhost:8080/](http://localhost:8080/), login (id: `admin` pw `admin`), click on an app, click on the settings icon...

## Next Steps, things I want to do:
### Globally
- Setup docker-componse env, for easy dev.
- Provide a global Theme in context
- fix typescript config to remove the few interpreteur issues (didn't have much time to spend on that)
- take time commenting every method for auto-documentation
- setup a real separate repo & private npm library to set aup a **clean DESIGN SYSTEM**

### Dashboard view
- add a 'Sorter' to quickly sort apps (by date, etc...)

### App Detail view
- Make SparkAppDetail UI more beautiful (not just reusing the card), take more time to think about layout: didn't have time to do that


![Alt text](src/assets/images/github/1.png?raw=true "Title")