<template>
   <div>
        <h2>hola mundo desde el Test</h2>
        <h4 class="compPadre">{{msg}}</h4>
        <h3 v-text="title"></h3>
        <strong>{{fullName}}</strong>
        <br>
        <p>mi nombre es {{user.name}} {{user.surnames}}</p>
        <span v-html="myHtml"></span>
        <div v-if="showName">
            {{user.name}}
            {{user.surnames}}
        </div>
        <div v-else>
            No se muestra el nombre
        </div>
       <ul>
          <li class="list-group-item" v-for="task in tasks" v-bind:key="task">
              {{task.title}}
          </li>
       </ul>
       <hr>
       <button v-on:click="saludar(user.name)">Haz click para saludar</button>
       <hr>
       <input type="text" v-model="label" v-on:keyup="enviarkeyup" v-on:keyup.enter="enviarKeyupEnter" ><br><br>
       <strong style=" font-family: 'Lucida Console', Courier, monospace; font-size:20px;">{{label}}</strong>


   </div>
</template>
<script>
    export default {
        data(){
            return {
                title:'Hola vue js',
                label:'',

                user:{
                    name:'Newal',
                    surnames:'Medina'
                },
                myHtml:'<del>Este es un texto con etiquetas html</del>',
                showName:false,
                tasks:[
                    {title:"eat"},
                    {title:"diner"},
                    {title:"play"},
                    {title:"football"},
                    {title:"baseball"},
                ]
            }
        },
        methods: {
            saludar(nombre){
                alert("Hola "+nombre+" como estas");
            },
            enviarkeyup(e){
               console.log(e.target.value);
            },
            enviarKeyupEnter(){
                alert("Acabas de dar enter");
            },
        },
        computed:{
            fullName(){
                return this.user.name + ' ' + this.user.surnames;
            }
        },
        props:{
            msg:{
                type: String,
                default:"mensaje por defecto"
            }
        }
    }
</script>
<style>
body{
    width:80%;
    margin:0 auto;
}
.compPadre{
    color:white;
    background-color: black;
    padding:15px;
}
</style>