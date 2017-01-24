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

..* Cette ligne va donc render à la vue la valeur de notre variable message : "Salut les gens"

8.**Cela ne marche pas pour les attributs (href par exemple: `href='{{ link }}'` PAS POSSIBLE**

..* Il faudra utiliser le `v-bind:href` ou le raccourci `:href` **et on lui mettra la valeur link directement** `<a href :link="link">Osef</a>`

9.Cela est pour **tout les attributs**, le v-bind: (exemple title pour un link : `:title="message"` : La valeur du title de ce link sera la valeur de la variable `message`)

10.Il est possible de concatener dans les links comme cela : `<a :href="link + '/dunno'"`
