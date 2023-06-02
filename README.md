# StaTech-Industry
Minecraft 1.19.2 modpack focused on Modern Industrializations. Join us on [Discord](https://discord.gg/RDaJEnN3uS). Click [here](https://github.com/TheStaticVoid/StaTech-Industry/blob/main/MODLIST.md) for a full list of mods.

This modpack includes the following mods no longer available on CurseForge: 

- [ModMenu](https://github.com/TerraformersMC/ModMenu) - Licensed under MIT, allowing for redistribution in this pack.

- [Iris](https://github.com/IrisShaders/Iris) - Licensed under LGPL. No changes made from source repo.


This modpack also includes the following resources. Do not report any issues you might experience with these to their developers, but rather to this mod's Discord.

- [Complimentary Reimagined](https://github.com/ComplementaryDevelopment/ComplementaryReimagined)

- [Smooth font from Faithful32x](https://github.com/Faithful-Resource-Pack/Faithful-Java-32x)

## Installation
I recommend the use of [Prism Launcher](https://prismlauncher.org/) for handling modded installs. The following instructions assume you have Prism installed with your Minecraft account signed in already. To install the latest version of StaTech Industry, follow these steps:

1. Navigate to the [Releases](https://github.com/TheStaticVoid/StaTech-Industry/releases) and download the .zip of the latest version.
2. In the Prism Launcher, click "Add Instance" then select the "Import from zip" tab on the left. Navigate to where you downloaded the .zip and click Ok.
3. You will be prompted with a menu describing that some mods are blocked from download on third-party launchers. Add the folder you use as your downloads folder using `Add Download Folder` button, then click `Open Missing` to open the mod downloads. Save them to your downloads and they will be detected by the launcher.
4. Click "Ok" and allow for the process to finish. 
5. Click "Edit" under the StaTech Industry instance and ensure you have at least 4-6 GB or RAM dedicated to the pack, as well as your version of Java is Java 17.


## Server setup using Docker-compose

Pre-requisites:
- Knowledge of Docker
- Knowledge of Docker-compose

In this repository is an example of how to use docker to host this server. Please refer to [docker-compose.yml](./docker-compose.yml) for it's definition.

Copy the docker-compose file to an appropriate folder and follow the following guide on how to create a curseforge api key:


### Curseforge key generation

A CurseForge API key is required to use this feature. Go to their [developer console](https://console.curseforge.com/), generate an API key, and set the environment variable CF_API_KEY.

When entering your API Key in a docker compose file you will need to escape any `$` character with a second `$`.

Example if your key is `$11$22$33aaaaaaaaaaaaaaaaaaaaaaaaaa`:

```
environment:
  CF_API_KEY: '$$11$$22$$33aaaaaaaaaaaaaaaaaaaaaaaaaa'
```


To avoid exposing the API key, it is highly recommended to use a .env file, which is loaded [automatically by docker compose](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with-an-env-file). `$`s in the value still need to escaped with a second `$` and the variable needs to be referenced from the compose file, such as:

environment:
  CF_API_KEY: ${CF_API_KEY}


Execute the following command to copy the `.env.example` to `.env`:

``` 
cp .env.example .env 
```

Place your API Key from the developer console inside the .env file whilst escaping the `$`s.

After creating the .env containing the `CF_API_KEY` entry, run the following command to start the server:

```
docker compose up -d
```

Afterwards you can monitor the logs using:

```
docker compose logs -f
```