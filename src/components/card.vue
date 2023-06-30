<script>
export default {
    name:'CardComponent',
   props:{
    title: String,
    message:{
        type: String,
        required: true,
        
    }
   }


};
</script>

<template>
<div class="conteiner--card">
     <div class="card" >
        <img src="../assets/frontLever.png" alt="">
        <h1>{{ title }}</h1>
        <p>{{ message}}</p>
     </div>
</div>
</template>

<style>

.conteiner--card{
 
    
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  
}
.card{
    position: absolute;
    top: 5em;
    left: 1em;
    right: 1em;


    border: solid #fbf7f700 0.1em;
    padding: 1em;
    border-radius: 5%;
    box-shadow: #a39cf2 0em 0em 3em -0em;
}
.card img{
    width: 5em;
}
.card h1{
    font-size: 1.5em;
}
</style>