<template>
    <div  class="containerHome">
        <div class="row" v-on:click="show = !show">
            <div class="col-1 col-xl-2">
                <router-link  to="/Page5">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
            <transition name="fade1" appear>
                <div class="col-10 col-xl-8 Text">
                    <h1 v-on:click="show1 = !show1" class="Text1 text-center">Основные направления Буддизма</h1>
                    <div class="textcols">
                        <transition name="fade1">
                            <div v-if="show1" v-on:click="show2 = !show2" class="textcols-item">
                                <h3 class="text-center Text2">Махаяна</h3>
                                <ul class="border">
                                    <li>Считает, что благочестие мирянина сопоставимо <b class="Text-b">с заслугами монаха и обеспечивает спасение</b>.</li>
                                    <li>Появляется <b class="Text-b">институт бодисатв — святых</b>, достигших просвещения, которые помогают мирянам, ведут их по пути спасения.</li>
                                    <li>Появляется большой <b class="Text-b">пантеон святых</b>, которым можно молиться, просить у них помощи.</li>
                                    <li>Появляется понятие о рае, куда душа попадает за добрые дела, и аде, куда она попадает в наказание за грехи. Придает большое значение обрядам и чародейству.</li>
                                    <li>Появляются скульптурные <b class="Text-b">изображения будд и бодисатв</b>.</li>
                                </ul>
                            </div>
                        </transition>
                    </div>

                </div>
            </transition>
            <div class="col-1 col-xl-2">
                <router-link  to="/Home">
                    <div class="col-12 Href"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page6",
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

    .Text{
        font-size: calc(7px + 1vw);
    }
    .fade1-enter-active{
        animation: go1 4s ease;
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
    .border {
        list-style: none;
        padding: 0;
    }
    .border li {
        font-family: Arial, sans-serif;
        padding: 7px 20px;
        margin-bottom: 10px;
        border-radius: 5px;
        border-left: 10px solid #a58ba2;
        box-shadow: 2px -2px 5px 0 rgba(0,0,0,.1),
        -2px -2px 5px 0 rgba(0,0,0,.1),
        2px 2px 5px 0 rgba(0,0,0,.1),
        -2px 2px 5px 0 rgba(0,0,0,.1);
        letter-spacing: 2px;
        transition: 0.3s all linear;
    }
    .border li:nth-child(5) {border-color: #a76c9f;}
    .border li:nth-child(4) {border-color: #9a6ca7;}
    .border li:nth-child(3){border-color: #776ca7;}
    .border li:nth-child(2){border-color: #6c7da7;}
    .border li:nth-child(1){border-color: #6c94a7;}
    .border li:hover {border-left: 10px solid transparent;}
    .border li:nth-child(5):hover {border-right: 10px solid #ff00de;}
    .border li:nth-child(4):hover {border-right: 10px solid #c700ff;}
    .border li:nth-child(3):hover {border-right: 10px solid #2e00ff;}
    .border li:nth-child(2):hover {border-right: 10px solid #004bff;}
    .border li:nth-child(1):hover {border-right: 10px solid #00adff;}

</style>