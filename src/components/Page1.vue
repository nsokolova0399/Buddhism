<template>
     <div  class="containerHome">
                    <div class="row" v-on:click="show = !show">
                        <div class="col-3"></div>
                        <transition name="fade" appear>
                        <div class="col-6 Text">
                            <transition name="fade">
                                <h1 class="Text1 text-center">Возникновение буддизма</h1>
                            </transition>
                            <transition name="fade">
                                <h2 v-on:click="show1 = !show1" class="Text2 text-center">(Середина I тысячелетия до н. э. север Индии)</h2>
                            </transition>
                            <transition name="fade">
                                <p v-if="show1" v-on:click="show2 = !show2">Буддизм зародился как течение, <b class="Text-b">оппозиционное</b> господствовашему в то время <b class="Text-b">брахманизму</b>.</p>
                            </transition>
                            <transition name="fade">
                                    <div v-if="show2">
                                        <p>В середине VI в. до н.э. в Индии был <b class="Text-b">кризис</b>. И в это время появилось большое
                                    количество бродячих <b class="Text-b">аскетов</b>.
                                        </p>

                                    <p>Они противостояли порядкам, предлагали ряд учений, среди которых был
                                    <b class="Text-b">буддизм</b>.</p>
                                    </div>
                            </transition>
                        </div>
                        </transition>

                        <div class="col-2">
                            <div class="Button1 col-4">
                            <router-link to="/Page2">
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
    .Button1{
        background-color: white;
        margin-top: 10%;
        padding-bottom: 5%;
        font-size: 45px;
        border-radius: 20px;
    }
    .Button1 a{
        text-decoration: none;
        color: rgba(166, 117, 177, 0.78);
    }
    .Button1 a:hover{
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
        padding-top: 2%;
        padding-bottom: 5%;
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