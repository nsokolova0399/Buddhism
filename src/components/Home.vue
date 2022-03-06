<template>
    <div class="containerHome">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4 Text0">
                <p class="Text1">"Всё, что мы есть – это результат наших мыслей."</p>
                <p class="Text2 text-right">Сиддхартха Гаутама (Будда)</p>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="Button-1 col-4 text-center">
                    <b-button
                        class="btn"
                    ><router-link to="/Page1">
                        <a>Начать</a>
                    </router-link>
                </b-button>

            </div>
            <div class="col-4"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        components: {
        }
    }
</script>

<style>
    .Text0{
        background-color: rgba(255, 255, 255, 0.78);
        padding: 2% 2% 0% 2%;
        border-radius: 8px;
    }
    .Text1{
        font-size: 24px;
        font-style: italic;
        font-weight: bold;
        font-family: Arial, sans-serif;
    }
    .Text2{
        font-size: 22px;
    }
    .containerHome{
        color: black;
        border-color: black;
        border-radius: 8px;
        padding-top: 12%;
        padding-bottom: 10%;
    }
    .Button-1{
        padding-top: 2%;
    }
    .btn{
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 5px 5px darkgray;
        padding:10px 12px 10px 12px;
    }
    .btn:hover,.btn:active{
        background-color: #9a4a4a;
        border-color: #bb7171;
        box-shadow:0 5px 5px darkgray;
        text-decoration: none;
    }
    .btn a{
        text-decoration: none;
        color: white;
    }
    .btn a:hover, a:active{
        text-decoration: none;
        color: white;
    }
</style>