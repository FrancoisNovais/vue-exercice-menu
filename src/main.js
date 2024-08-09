import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import du composant 'vue-fontawesome' */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import de l'icône de type 'solid' */
import { faThumbsUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

/* Ajout de ces icônes à la bibliothèque de votre projet */
library.add(faThumbsUp, faCaretDown, faCaretUp)

/* Indique à l'instance Vue.js quelle va utiliser le composant vue-fontawesome */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
