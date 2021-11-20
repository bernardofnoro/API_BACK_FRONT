# API BACK_FRONT INTEGRATION.

In this project i'm developing an API based on GAMES.

I'm creating  **five** different routes, each route receives a genre of games wich will be listed, listed by ID, edited, and deleted using the **CRUD**.

My API is connected to a **MongoDB** cloud database and there is where we will be storing all of our data.

My API was uploaded to Heroku and now my whole application is **ONLINE**.

**`The Main page:`**

```javascript
https://api-front-back.herokuapp.com/
```

The link above is where the application starts, from that link we can start observing the routes applied during this project.

**`Route 1: Role Playing Game (RPG)`**

```javascript
https://api-front-back.herokuapp.com/rpg/
```

Let's use the first route as example:

Within all routes we have the **CRUD** statements that we use to **C**reate, **R**ead, **U**pdate and **D**elete our data.

So let's start with our **C**reate statement. To do that we need a new sub route that allows us to send data to our MongoDB database:

*Method: [POST]*

```javascript
https://api-front-back.herokuapp.com/rpg/add
```

Now that we have our sub route to send information, we need a JSON that our API will understand and accept! (Yes, if the JSON is not filled correctly the API won't let you store any data!  Validation is your friend!)

In this case we need **6** types of information that we declared in our <u>*Models*</u> files:

- `Nome:`
- `Lancamento:`
- `Genero:`
- `Desenvolvedores:`
- `ImgUrl:`
- `Plataforma:`

**`The JSON FORMAT:`**

```javascript
{
"nome":"RPG Game",
"lancamento":2021,
 "genero":"RPG",
"desenvolvedores":"Dev Team",
"imgurl":"game imagem url here",
"plataforma":"your console or pc "
}
```

After a sucessfull entry of data in our API , we need to **R**ead that information

Below we have 2 routes on how to read that data.

*Method[GET]*

```javascript
https://api-front-back.herokuapp.com/rpg/listall
```

This route will list **all** RPG games in the database.

*Method[GET]*

```javascript
https://api-front-back.herokuapp.com/rpg/listid/insert id of the game you want to explore
```

This route will list **one** RPG game by it's ID.

You can choose whichever fits your needs.



Moving foward!

Now we need our **U**pdate and **D**elete routes!

For the update we will need the ID of the game you want to update data and our JSON FORMAT with all the new information!  See below :

*Method[PUT]*

```javascript
https://api-front-back.herokuapp.com/rpg/update/insert ID of the game you want to modify
```

```javascript
{
"nome":"RPG Game MODIFIED",
"lancamento":2022,
 "genero":"RPG",
"desenvolvedores":"Dev Team MODIFIED",
"imgurl":" NEW game imagem url here",
"plataforma":"NEW PLATAFORMS"
}
```

And there we go! We sucessfully updated **one** game in our RPG database!

To delete we also need the ID, so we can erase **one** game from our RPG database.

```javascript
https://api-front-back.herokuapp.com/rpg/delete/insert ID of the game you want to delete
```

And that's all for our RPG route!

We sucessfully Created, Read, Updated and Deleted data using **CRUD!**



As said before this API we have **5** routes!

Each route contains one genre of games. Let's check the other ones?

**`Route 2: First Person Shooter (FPS)`** 

```javascript
https://api-front-back.herokuapp.com/fps/
```

**`Route 3: Racing`** 

```javascript
https://api-front-back.herokuapp.com/racing/
```

**`Route 4: Battle Royale`** 

```javascript
https://api-front-back.herokuapp.com/battleroyal/
```

**`Route 5: Multiplayer Online Battle Arena (MOBA)`** 

```javascript
https://api-front-back.herokuapp.com/moba/
```

All these routes are able to do **CRUD** statements!

All we need is to add  the sub routes on our urls!

*[Create - POST]*

```javascript
/add
```

*[Read - GET]*

```javascript
/listall
```

```javascript
/listid/id
```

*[Update - PUT]*

```javascript
/update/id
```

*[Delete - DELETE]*

```javascript
/delete/id
```

You're all set to go and use this API with it's full potential!

I hope you enjoy this API , had a lot of fun doing it!

See ya soon!



*Bernardo N.* 

🚀