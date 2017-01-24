# Cheat Sheet vue.js during grafikart tutorial

## 01 - Decouverte

1. Englober d'un élément avec un ID (ici "app")

2. Appel d'une variable : `{{ nomdelavariable }}` (ici "message")

3. Initialiser Vue (dans app.js ici):

  * `new Vue({})`

  * En parametre un tableau d'options

4. Premier parametre : `el:` (element), qui va indiquer sur quel(s) element(s) on va greffer Vue.js

  * Ici, on indique `'#app'` pour le greffer sur notre div avec l'ID `app`

5. Pour définir la variable (comme `{{ message }}` ici) :

6. Nouvelle clé, qui s'appelle `data:` qui va contenir toutes les variables que l'on souhaite injecter dans notre vue

7. Ici par exemple on peut écrire `message: 'Salut les gens'`  

  * Cette ligne va donc render à la vue la valeur de notre variable message : "Salut les gens"

8. **Cela ne marche pas pour les attributs (href par exemple: `href='{{ link }}'` PAS POSSIBLE**

  * Il faudra utiliser le `v-bind:href` ou le raccourci `:href` **et on lui mettra la valeur link directement** `<a href :link="link">Osef</a>`

9. Cela est pour **tout les attributs**, le v-bind: (exemple title pour un link : `:title="message"` : La valeur du title de ce link sera la valeur de la variable `message`)

10. Il est possible de concatener dans les links comme cela : `<a :href="link + '/dunno'"`

####Conditions v-if/v-else

1. Création d'une autre variable (ici `success`), avec comme valeur `true`
 * Et dans la view une alert success bootstrap classique
2. Dans la vue est dans cette div alert nous mettons un `v-if="success"` qui aura pour effet d'afficher cette div uniquement si la variable success a une valeur à `true` ou similaire
3. Création d'une autre div alert (avec `danger`) et nous lui mettons l'attribut `v-else` qui indiquera quoi faire si la variable success est à false
 * Le v-else ici est similaire à `v-if="!success"`
4. *le v-show appliquera juste un display: none mais celui sera visible dans le html en console alors que le v-if le supprime*

####Boucles

1. Dans app.js nous créons une variable `persons:` qui a pour valeur un tableau d'élements
2. Nous créons une `ul` et une `li` avec le `v-for:` sur cette li où l'on précise ce que l'on veut, ici le `person in persons` dit "Pour chaque personne (person) dans la variable persons", et à l'intérieur du `<li> </li>` nous appelons `{{ person }}`. Cela permettra de boucler sur chaque element du tableau persons et à chaque fois d'afficher la valeur.

####L'attribut v-on et les methods

1. Exemple pour ajouter un bouton close sur nos `alert`
2. Sur le bouton (ici un button bootstrap prévu à cet effet) on applique un `v-on:` puis on lui dit quel événement écouter, ici `click` et enfin le nom de la méthode à exécuter. Soit ici `v-on:click="close"`
3. Dans app.js on définit cette méthode, pas dans data mais dans `methods:` Soit :

`methods: {
  close: function(){
    this.success = false
  }
  },`

* Le **this** nous permet d'accéder à **n'importe quelle** propriété présente dans `data:`
