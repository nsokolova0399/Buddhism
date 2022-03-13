<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-1 col-xl-2">
                <router-link  to="/Page1">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
            <transition name="fade" appear>
                <div class="col-10 col-xl-8 Text">
                    <transition name="fade">
                        <h1 v-on:click="show1 = !show1" class="Text1 text-center">Кто такие аскеты и что такое буддизм?</h1>
                    </transition>
                    <transition name="fade">
                        <p v-if="show1" v-on:click="show2 = !show2"><b class="Text-b">Аскеты</b> - люди, которые отказываются от земных благ в
                            целях достижения морального или религиозного идеала.</p>
                    </transition>
                    <transition name="fade">
                        <p v-if="show1" v-on:click="show2 = !show2">
                          <img src="../assets/4.jpg" alt="Аскет" width="300" height="200" style="display: block; margin-left: auto; margin-right: auto;" />
                        </p>
                    </transition>
                    <transition name="fade">
                            <div v-if="show2 && show1">
                                <p><b class="Text-b">Буддизм</b> - религиозно-философское учение (Дхарма) о духовном пробуждении (бодхи).
                                    Основателем учения считается <b class="Text-b">Сиддхартха Гаутама (Будда Шакьямуни)</b>.
                                </p>
                            </div>
                    </transition>
                </div>
            </transition>
                <div class="col-1 col-xl-2">
                    <router-link  to="/Page3">
                        <div class="col-12 Href"></div>
                    </router-link>
                </div>
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

<style scoped>
    img{
        max-width: calc(310px + 2vw);
    }
    .fade-enter-active{
        animation: go 2s ease-out;
    }
    @keyframes go {
        0% {
            animation:  ease 1s;
            transform: translateY(300px);
        }
        100%{
            transition: ease;
            transform: translateY(0px);
        }
    }
</style>