<template>
  <span id="app" class="App" >
    <header class="navigation" >
      <div class="row NK">
        <div class="col-lg-12 col-md-12 col-xs-12 text-center">


          <a>
            <router-link to="/Home">Буддизм</router-link>
          </a>
        </div>
      </div>
    </header>
<router-view></router-view>
    <footer>
      <div class="row Footer">
        <div class="col-lg-6 col-md-6 col-xs-4 text-center" >© МЭИ, Философия 2022</div>
        <div class="col-lg-6 col-md-6 col-xs-4 text-center">Соколова А.С., Абросимова М. Н.</div>
      </div>
    </footer>
  </span>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>

  .App{
    top: 0;
    position: fixed;
    left: 0;
    width: 100%;
    min-height: 7%;
    color: #000000;
  }
  header{
    font-size: 18px;
    color: #000000;
    top: 0;
    width: 100%;
    text-decoration: none;
    min-height: 30%;
    padding: 1.5% 1.5% 1.5% 1.5%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: rgb(255, 255, 255);
  }
  .NK{
    white-space: nowrap;
    font: bold 1em Arial, sans-serif;
    text-shadow: white 0 0 3px;
    font-size: 20px;
  }
  .NK a{
    text-decoration: none;
    color: #000000;

  }
  .NK a:hover{
    text-decoration: none;
    color: #000000;
  }

  body {
    background-image: url('./assets/1.jpg');
    background-position: center center;
    background-repeat:no-repeat;
    background-attachment:fixed ;
    background-size: cover;
  }

  footer {
    bottom: 0%;
    position: fixed;
    left: 0;
    width: 100%;
    min-height: 8%;
    color: #000000;
    background-color: rgba(255, 255, 255, 255);
    padding-top: 1%;
    font: 1em Arial, sans-serif;
  }
</style>