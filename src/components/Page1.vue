<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-1 col-xl-2 ">
                <router-link  to="/Home">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
            <transition name="fade" appear>
                <div class="col-10 col-xl-8 Text">
                    <span v-on:click="show1 = !show1">
                    <transition name="fade">
                        <h1 class="Text1 text-center">Возникновение буддизма</h1>
                    </transition>
                    <transition name="fade">
                        <h2 class="Text2 text-center">(Середина I тысячелетия до н. э. север Индии)</h2>
                    </transition>
                    </span>
                    <transition name="fade">
                        <p v-if="show1" v-on:click="show2 = !show2">Буддизм зародился как течение, <b class="Text-b">оппозиционное</b> господствовашему в то время <b class="Text-b">брахманизму</b>.</p>
                    </transition>
                    <transition name="fade">
                        <div v-if="show2 && show1">
                            <p>В середине VI в. до н.э. в Индии был <b class="Text-b">кризис</b>. И в это время появилось большое
                                количество бродячих <b class="Text-b">аскетов</b>.
                            </p>

                            <p>Они противостояли порядкам, предлагали ряд учений, среди которых был
                                <b class="Text-b">буддизм</b>.</p>
                        </div>
                    </transition>
                </div>
            </transition>
            <div class="col-1 col-xl-2 ">
                <router-link  to="/Page2">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page1",
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
    .Href{
        min-height: 100px;
        min-width: 100px;
    }
    .Text-b{
        font-size: calc(10px + 1vw);
    }
    .Text{
        background-color: rgba(255, 255, 255, 0.95);
        padding: 2% 2% 0% 2%;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-size: calc(9px + 1vw);
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
        animation: go 3s linear;

    }
    @keyframes go {
        0% {
            animation:  ease 3s;
            transform: translateY(300px);
        }
        100%{
            transition: ease;
            transform: translateY(0px);
        }
    }
</style>