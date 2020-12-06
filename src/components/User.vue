<template>
    <div class="user">
        <h1>Componentes Usuarios</h1>
        <ul>
            <li v-for="user in users" v-bind:key="user.name">
                {{user.name}} - {{user.email}}  <button class="deleteButon" type="button" v-on:click="deleteUser()">X</button>
            </li>
        </ul>
        <hr>
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="nombre">
            <input type="email" v-model="newUser.email" placeholder="correo">
            <button type="submit">Enviar</button>
           
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            users:[
                {
                    name:"nombre 1",
                    email:"nombre1@correo.com",
                    contacted:false
                },
                {
                    name:"nombre 2",
                    email:"nombre2@correo.com",
                    contacted:false
                },
                {
                    name:"nombre 3",
                    email:"nombre3@correo.com",
                    contacted:true
                }
            ],
            newUser:[]
        }
    },
    methods:{
        addUser(){
            this.users.push(this.newUser);
            //console.log(this.newUser.value);
            this.newUser={};
        },
        deleteUser(user){
            // alert("eliminando usuario");
            this.users.splice(this.users.indexOf(user),1);

        },
    }
}
</script>
<style >
    .user{
        background-color: black;
        color: white;
        padding: 20px;
        width: 80%;
        margin: 0 auto;
    }
    input, button{
        margin-right: 10px;
    }
    .deleteButon{
       background: red;
       margin: 5px;
       width:40px;
       height:40px;
       text-align: center;
    }
</style>