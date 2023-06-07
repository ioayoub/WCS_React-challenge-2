# React Challenge 2

![ReactChallenge2](./src/assets/snapscout.png)

## Installation
<br>

- Cloner le projet

- Ne pas oublier :

<br>

```
npm install
```
<br>

## Utilisation
<br>

- Les datas sont disponible dans /src/data/challenge.json
- Les images sont diponibles dans le dossier public/images
- Pour afficher une image dans votre navigateur en local (port par défaut) utilisez la syntaxe suivante : 

<br>

```
localhost:5173/images/[Nom de l'image]
```

<br>

## Consigne de l'exercice

<br>

### <u>Description</u> :

<br>

Créez une application web qui affiche une galerie d'images. Lors de l'initialisation de la page, toutes les images doivent être chargées. L'application doit permettre à l'utilisateur de filtrer les images en fonction de différents critères.

<br>

### <u>Instructions</u> :

<br>

- Au chargement de la page, toutes les images doivent être affichées.

- À côté de la galerie d'images, ajoutez un champ de saisie (input) permettant à l'utilisateur de filtrer les images par nom. Lorsque l'utilisateur saisit du texte dans cet input, seules les images dont le nom correspond en partie ou en totalité à ce texte doivent être affichées en temps réel.
- Ajoutez également une liste de catégories sous la galerie d'images. Chaque catégorie doit être un bouton ou un lien cliquable. Lorsque l'utilisateur clique sur une catégorie, seules les images appartenant à cette catégorie doivent être affichées.

- Les filtres doivent être cumulables, ce qui signifie que si l'utilisateur saisit du texte dans l'input et clique sur une catégorie, seules les images correspondant aux deux critères doivent être affichées.

- Bonus : Lorsque l'utilisateur clique sur une image, affichez toutes les informations de cette image dans un nouveau composant situé en bas de la page. Ce composant doit afficher le nom de l'image, sa catégorie et éventuellement d'autres détails pertinents.

- Mega-bonus : Mettez en place un système de routage pour afficher les informations de la carte sur une nouvelle page distincte. Lorsque l'utilisateur clique sur une image, il est redirigé vers une page dédiée qui affiche les détails de l'image sélectionnée.
