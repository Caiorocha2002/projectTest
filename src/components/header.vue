<script>

export default {
    name: 'headerComponent',
    components:{
    
    },
    data(){
        return{
            menuVisivel: false
            
        }
     },
  methods: {
    exibirMenu() {
      this.menuVisivel = !this.menuVisivel
    }
  }
  
};

</script>

<template>


 <div class="container">
    <img class="logo" src="../public/fullPlancheLogo.png" alt="">

    <div class="menuStyle" @click="exibirMenu" >
        <span class="hamburguer-line"></span>
        <span class="hamburguer-line"></span>
        <span class="hamburguer-line"></span>
      </div>

        <ul class="menuHamburgue"  :class="{ 'visible': menuVisivel}" id="ul--Menu">
            <li> <a href="#"> Produtos

            </a>
            </li>
            <li>
                <a href="#">   Eventos </a>
            </li>
            <li>
                <a href="#">  Home </a>
            </li>
        </ul>


        


 </div>

 <div>
    <font-awesome-icon icon="cart-shopping" />
 </div>
</template>

<style>
@import '@fortawesome/fontawesome-free/css/all.css';

.container{
width: 100%;
height: 4em;
border: #0000 solid;
position: absolute;
 top: 0em;
    left: 0em;
background: #094876;;
}
.logo{
    width: 3em;
    left: 0em;
    position: absolute;
   
}

.hamburguer-line {
    display: block;
    width: 15px;
height: 5px;
margin: 3px 0;
    background-color: black;
    border-radius:5em;
}
.menuHamburgue{
    visibility: hidden;
    position:absolute;
    top:3em;
   z-index:5;
   color: #fff;
    margin:auto 0;

}
.menuHamburgue.visible{
    visibility: visible;
}
.menuStyle{
    position: absolute;
top: 1em;
 right: 1em;
border: none;

}
ul{
    list-style: none;
    margin:0;
    padding:0;
right: 0em;
    height: 15em;



}
li{
    margin: 1em auto;
}
a{
    text-decoration: none;
    color:#fff;
    border: solid 0em;
    background-color:#094876;
    border-radius: 1em;
    padding: 0.3em;
}
</style>