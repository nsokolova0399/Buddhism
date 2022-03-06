<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-2"></div>
            <div class="col-1">
                <div class="Button2 col-9">
                    <router-link to="/Page1">
                        <a>←</a>
                    </router-link>
                </div>
            </div>

            <transition name="fade" appear>
                <div class="col-6 Text">
                    <transition name="fade">
                        <h1 v-on:click="show1 = !show1" class="Text1 text-center">Кто такие аскеты и что такое буддизм?</h1>
                    </transition>
                    <transition name="fade">
                        <p v-if="show1" v-on:click="show2 = !show2"><b class="Text-b">Аскеты</b> - люди, которые отказываются от земных благ в
                            целях достижения морального или религиозного идеала.</p>


                    </transition>
                    <transition name="fade">
                        <p v-if="show1" v-on:click="show2 = !show2">
                          <img src="../assets/4.jpg" alt="Аскет" width="300" height="200" style="margin:-3% 0% -3% 28%; " />
                        </p>
                    </transition>
                    <transition name="fade">
                            <div v-if="show2">
                                <p><b class="Text-b">Буддизм</b> - религиозно-философское учение (Дхарма) о духовном пробуждении (бодхи).
                                    Основателем учения считается <b class="Text-b">Сиддхартха Гаутама (Будда Шакьямуни)</b>.
                                </p>
                            </div>
                    </transition>


                </div>
            </transition>

            <div class="col-2">
                <div class="Button1 col-4">
                    <router-link to="/Page3">
                        <a>→</a>
                    </router-link>
                </div>
            </div>
            <div class="col-1"></div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Page2",
        data(){
            return{
                show:true,
                show1:false,
                show2:false,
            }
        }
    }
</script>

<style>
    .Button1{
        background-color: white;
        margin-top: 10%;
        padding-bottom: 5%;
        font-size: 45px;
        border-radius: 20px;
    }
    .Button2{
        background-color: white;
        margin-top: 20%;
        padding-bottom: 11%;
        margin-left: 22%;
        font-size: 45px;
        border-radius: 20px;
    }

    .Button1 , .Button2 a{
        text-decoration: none;
        color: rgba(166, 117, 177, 0.78);
    }
    .Button1, .Button2 a:hover{
        text-decoration: none;
        color: #fff3f3;
    }
    .Text-b{
        font-size: 21px;
    }
    .Text{
        background-color: rgba(255, 255, 255, 0.95);
        padding: 2% 2% 0% 2%;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-size: 19px;
    }
    .Text p{
        padding-top: 20px;
    }
    .containerHome{
        color: black;
        border-color: black;
        border-radius: 8px;
        padding-top: 1%;
        padding-bottom: 3%;
    }
    .Text2{
        font-weight: normal;
    }

    .fade-enter-active{
        animation: go .80s ease;

    }
    @keyframes go {
        0% {
            animation:  ease 30s;
            transform: translateY(300px);
        }
        100%{
            transition: ease;
            transform: translateY(0px);
        }
    }
</style>