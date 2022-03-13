<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-1 col-xl-2">
                <router-link  to="/Page2">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
            <transition name="fade" appear>
                <div class="col-10 col-xl-8 Text">
                    <transition name="fade">
                        <h1 v-on:click="show1 = !show1" class="Text1 text-center">Сиддхартха Гаутама (Будда Шакьямуни)</h1>
                    </transition>
                    <transition name="fade1">
                        <p v-if="show1" v-on:click="show2 = !show2">
                            Он был сыном главы племени <b class="Text-b">шакьев</b>, родившимся в <b class="Text-b">
                            560г. до н.э. на северо-востоке Индии</b>.
                        </p>
                    </transition>
                    <transition name="fade1">
                        <div v-if="show2 && show1" v-on:click="show3 = !show3" class="Img">
                            <p>
                                <img src="../assets/5.jpg" alt="Будда" class="rightimg" />
                                    Предание гласит, что индийский царевич Сиддхартха Гаутама <b class="Text-b" style="font-style: italic; color: darkslategrey">после беспечной и счастливой
                                молодости</b> остро ощутил <b class="Text-b">бренность и безысходность жизни</b>, ужас перед идеей о бесконечной
                                    череде перевоплощений. Он ушел из дому, для того чтобы, общаясь с мудрецами, найти ответ
                                на вопрос: <b class="Text-b">как можно человеку освободиться от страданий</b>.
                            </p>
                           </div>
                    </transition>

                </div>
            </transition>
            <div class="col-1 col-xl-2">
                <router-link  to="/Page4">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page3",
        data(){
            return{
                show:true,
                show1:false,
                show2:false,
                show3:false,
            }
        }
    }
</script>

<style>
    img{
       max-width: calc(220px + 2vw);
    }
    .rightimg  {
        float: right;
        margin: -25px 0 calc(5px + 1vw) calc(5px + 1vw);
    }
    .fade-enter-active{
        animation: go 3s ease;
    }
    .fade1-enter-active{
        animation: go1 4s ease;
    }

    @keyframes go {
        0% {
            animation:  ease 2s;
            transform: translateX(500px);
        }
        100%{
            animation:  ease 2s;
            transform: translateX(0px);
        }
    }
    @keyframes go1 {
        0%{
           opacity: 0%;
        }
        50%{
            opacity: 50%;
        }
        100%{
            opacity: 100%;
        }

    }

</style>