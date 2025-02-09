# SportSee

Ce repository contient tout le code source nécessaire pour faire tourner l'application SportSee

## 1. Backend - Server (en local)

## 1.1 Prérequis

- [NodeJS (**version 12.18**)](https://nodejs.org/en/) ou une version plus récente (a été testé jusqu'à Node 20.0)
- [Yarn](https://yarnpkg.com/)

## 1.2 Lancer le server

- La commande `yarn` vous permetra d'installer toutes les dépendences
- La commande `yarn dev` vous permettra de lancer le server en local
  => Il est aussi possible de retrouver les données server via un mock, voir ##3

## 2. Frontend - Client

## 2.1 Prérequis

- [npm](https://www.npmjs.com/)

## 2.2 Lancer l'application

- La commande `npm install` vous permetra d'installer toutes les dépendences
- La commande `npm run dev` vous permettra de lancer l'application en local

## 2. Changer d'utilisateur

- L'application ne dispose pas d'interface de connexion pour se connecter selon un profil, mais il est possible de changer l'id de l'utilisateur dont on veut inspecter les données

  => `./client/src/App.jsx` => ligne 17 => `setUserId()`

## 3. Backend - Server (mock)

- Il est aussi possible d'aller chercher les données backend dans un mock

  => Les appels API se font grâce au fichier `./client/src/database.database.jsx`

        => Mettre la variable `isMock`, ligne 81, pour passer sur les données mockées
