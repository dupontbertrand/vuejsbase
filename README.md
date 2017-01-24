# Cheat Sheet vue.js during grafikart tutorial

## 01 - Decouverte

1.Englober d'un élément avec un ID (ici "app")
2.Appel d'une variable : `{{ nomdelavariable }}` (ici "message")
3.Initialiser Vue (dans app.js ici):
..* `new Vue({})`
..* En parametre un tableau d'options
4.Premier parametre : `el:` (element), qui va indiquer sur quel(s) element(s) on va greffer Vue.js
..* Ici, on indique `'#app'` pour le greffer sur notre div avec l'ID `app`
5.Pour définir la variable (comme `{{ message }}` ici) :
6.Nouvelle clé, qui s'appelle `data:` qui va contenir toutes les variables que l'on souhaite injecter dans notre vue
7.Ici par exemple on peut écrire `message: 'Salut les gens'`  
