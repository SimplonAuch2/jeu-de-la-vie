## Le jeu de la vie

La programmation orientée objet a pour principe fondateur d'écrire le code de manière la plus proche possible du réel. Les objets représentent ainsi des choses du quotidien. Dans cette optique, l'un des exercices les plus populaires est le jeu de la vie, dont voici les bases :

Ecrivez un programme permettant de simuler un écosystème composé d'êtres vivants d'espèces différentes : 
- les plantes sont mangées par les végétariens
- les vétégariens sont mangés par les carnivores
- les carnivores et les végétariens

Le monde du vivant possède de nombreuses règles que l'on peut implémenter. Bien évidemment, ses règles sont simplifiées :
- les animaux sont sexués
- les végétaux sont asexués
- les animaux sont mobiles, au contraire des végétaux
- un animal se reproduit lorsqu'il a atteind sa maturité sexuelle, et qu'il croise un congénère du sexe opposé
- un végétal se reproduit tout seul


### Objectifs

Trouvez l'équilibre de manière à ce que tout ce petit monde puisse à la fois perdurer le plus longtemps possible, et représenter au plus juste le monde du réel ! Par exemple : peux de carnivores, beaucoup de végétaux, chaque animal possède une durée de vie plus ou moins identique - mais pas trop - pas espèce.


### Contexte de travail

- travail en pair-programming
- un dépôt par team, chacun travaille sur son poste et réalise un commit à chaque rotation
- développement en Javascript sur une page HTML unique
- l'écosystème est représenté sur une grille
- un seul animal (carnivore ou végétarien) ne peux occuper une case à la fois
- le temps est simulé par une fonction setInterval, qui permet de rafraîchir l'état du monde
- 3 jours sont dédiés au projet


### Attendus

- Fourniture du code source sur Github
- Présentation du programme fonctionnel sur ghpage si possible (bonus)


### Sprint 2

- un animal qui ne mange pas finit par mourrir
- des bactéries pullulent, et de temps-en-temps, certaines sont toxiques
- intégrez phaser.io ou pixijs.io au programme


