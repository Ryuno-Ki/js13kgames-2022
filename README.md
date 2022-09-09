# js13kgames-2022

Topic is death.

I turned that into a Tower Defense game.

## Sneak peak

![screenshot of the game from 19th August 2022](./journal/2022-08-19.png)

## Architecture

This game follows a Redux-like architecture for state management and React-like
ViewModel. Updates to the state are rendered to the DOM. Yes, I don't use
`<canvas>` but HTML and SVG here.

Event listeners dispatch actions to the store to update the state.

There is a snapshot in `localStorage`. If you observe something odd, chances
are clearing the localStorage and reload might fix it.

### Ideas for post-competition

Since
[Heroku is about to sunset free dynos](https://blog.heroku.com/next-chapter)
I don't deploy this game there. Therefore I don't implement multi-player.
The only challenge there would be match-making.

Due to the architecture, I can replicate actions over `socket.io` to keep all
states in sync. This is the main reason, why `store.dispatch()` is `async`.

To make this game more interesting, I thought about some kind of
[fog of war](https://en.wikipedia.org/wiki/Fog_of_war#In_video_games).
This would be masking the game and having the entities decide, which areas
are observable.

## License

Licensed under [AGPL v3.0 or newer][./LICENSE].

[Play it online](https://ryuno-ki.codeberg.page/js13kgames-2022/)

== I'm Using GitHub Under Protest ==

This project is currently hosted on GitHub. This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS). I am deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a mirror on Codeberg and my Gitea.
I urge you to read about the [Give up GitHub](https://GiveUpGitHub.org)
campaign from [the Software Freedom Conservancy](https://sfconservancy.org) to
understand some of the reasons why GitHub is not a good place to host FOSS
projects.

If you are a contributor who personally has already quit using GitHub, please
[write me an email](mailto:andre.jaenisch@posteo.de) for how to send us
contributions without using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without my permission. I do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
