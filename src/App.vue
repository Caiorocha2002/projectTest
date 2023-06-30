<script >
import headerComponent from './components/header.vue';
import  CardComponent from './components/card.vue';

export default { 
  name:'App',
 components:{
  headerComponent,
  CardComponent,

 }
}
</script>

<template>

<headerComponent />

<main >
<CardComponent title="Progressão" message="Front Lever"></CardComponent>

</main>


</template>

<style >


/* Zerar margens e preenchimentos */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Zerar estilos de lista */
ul,
ol {
  list-style: none;
}

/* Zerar estilos de link */
a {
  text-decoration: none;
  color: inherit;
}

/* Definir estilos básicos para elementos semânticos */
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}


</style>
