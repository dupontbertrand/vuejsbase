# Cheat Sheet vue.js during grafikart tutorial
[Lien des vidéos grafikart](https://www.youtube.com/watch?v=g7YKecZhFRA&list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0)
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
4. Le raccourci pour le `v-on` est le `@` soit `@click="close"`

####v-model

1. Ici pour que la valeur d'un texte change avec un input :
2. Nous créons un input avec la valeur `v-model="nomdumodel"`
3. Puis nous l'appelons dans notre vue également à l'endroit souhaité comme une variable autre `{{ nomdumodel }}`
4. Enfin dans le app.js nous le déclarons dans les `data:` : `nomdumodel: "Dunno"`

1. Cela nous permet (par exemple) d'afficher sous l'une des alertes son statut actuel:
 * En mettant une variable sous celle-ci
 * en la déclarant dans nos `data:`
 * dans la fonction `close` de rajouter losque l'alerte se ferme `this.status = "Fermée"`

1. Dans le cas d'une checkbox **exemple** :
 * `<input type="checkbox" v-model="state" :true-value="'Cochée'" :false-value="'Décochée'">
       <p>
         {{ state }}
       </p>`
* Et on déclare dans app.js la variable avec le statut initial : `state: 'Décochée'`

## 02 - L'instance

1. On stocke tout le `new Vue` dans une variable (ici `vm`) soit `let vm = ` pour nous permettre en console de l'inspecter avec un simple `vm `
2. Vue a un systeme de **_guetteur_** et de **_setteur_**
3. **C'est une des limitations de Vue.js, comme le montre l'exemple on ne peut pas changer ici le tableau `persons` en voulant accéder à l'index [0] par exemple, on passe par un .push('valeur')**
 * Soit `this.persons2.push("test")` et non **pas** `this.persons2[0] = "test"` (Voir à utiliser le `assign` aussi ..?)
4. Autre limitation : On ne peut pas rajouter de variable au fur et à mesure sans les avoir déclaré dans notre `data:`
5. On peut accéder à notre html via `vm2.$el` (ou `vm2` est ici l'ID de l'élément Vue.js)
