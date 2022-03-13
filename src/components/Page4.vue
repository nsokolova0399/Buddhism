<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-1 col-xl-2">
                <router-link  to="/Page3">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
            <transition name="fade" appear>
                <div class="col-10 col-xl-8 Text">
                    <transition name="fade3">
                        <h1 v-on:click="show1 = !show1" class="Text1 text-center">Сиддхартха Гаутама (Будда Шакьямуни)</h1>
                    </transition>
                    <transition name="fade1">
                        <p v-if="show1" v-on:click="show2 = !show2">
                            <b class="Text-b">Семь лет</b> путешествовал царевич и однажды, когда он сидел под
                            деревом Бодхи, на него снизошло озарение. Он нашел ответ на
                            свой вопрос.
                        </p>
                        <p v-if="show1" v-on:click="show2 = !show2">
                            Потрясенный своим открытием, он просидел под этим деревом несколько дней,
                            а затем спустился в долину, к людям, которым начал проповедовать
                            новое учение.
                        </p>
                    </transition>
                    <transition name="fade2">
                        <div v-if="show2 && show1" v-on:click="show3 = !show3" class="Img">

                            <p><img src="../assets/6.jpg" alt="Будда" class="lefttimg" />
                                Сначала к нему примкнули пять его бывших учеников, которые
                                отошли от него, когда он отказался от аскетизма. Впоследствии
                                у него появилось множество последователей. Его идеи были близки
                                многим. В течение 40 лет он проповедовал в Северной и Центральной Индии.
                            </p>

                        </div>
                    </transition>

                </div>
            </transition>
            <div class="col-1 col-xl-2">
                <router-link  to="/Page5">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page4",
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

<style scoped>
    img{
        max-width: calc(300px + 2vw);
        display: block;
        margin-left: auto;
        margin-right: auto
    }
    .fade-enter-active{
        animation: go 5s ease;
    }
    .fade2-enter-active{
        animation: go2 3s linear;
    }
    .lefttimg  {
        float:left;
        margin: -15px calc(5px + 1vw) calc(5px + 1vw) 0;
    }

    @keyframes go {
        0% {
            animation:  ease 5s;
            opacity: 0%;
        }
        100%{
            transition: ease;
            opacity: 100%;
        }
    }
    @keyframes go2 {
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