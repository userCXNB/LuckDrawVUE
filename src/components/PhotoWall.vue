<template>
  <div id="screen">
    <!-- <img src="@/assets/images/46eae50db6.jpg"> -->
    <div id="command">
      <h1 @click="$router.go(-1)">{{demoData.a}}</h1>
      <p>挑衅的,无情的,深思熟虑的,他们的谎言不会妨碍我。</p>
      <div id="bar"></div>
       <vue-star animate="animated bounceIn" color="#F05654">
         <i slot="icon" class="fa fa-heart" v-on:click='LuckDraw'>抽奖</i>
       </vue-star>
    </div>
    <div id="urlInfo"></div>
 </div>
</template>

<script>
import VueStar from 'vue-star'
import {mapActions,mapGetters} from "vuex";
export default {
  name: 'PhotoWall',
  components: {
    VueStar
   },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
            { src: './static/images/1ef7ea6559.jpg' },
            { src: './static/images/6a884d6ef2.jpg' },
            { src: './static/images/8fe86226ff.jpg' },
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },  
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },         
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },        
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },        
            { src: './static/images/46eae50db6.jpg' },
            { src: './static/images/94da4fb185.jpg' },
            { src: './static/images/69833ed09a.jpg' },

          ],
      Award:[],
      demoData:{a:'0000'}    
    }
  },
  methods:{
      ...mapGetters(['getData']),
      LuckDraw(){

          var nodeList = document.querySelectorAll('.hhh')
          var temp=-1,that = this,arr;
          arr = Array.prototype.slice.apply(nodeList);
          var timer = setInterval(function(Min,Max,callback){ 
            function RandomNumBoth(Min,Max){
                var Range = Max - Min;
                var Rand = Math.random();
                var num = Min + Math.round(Rand * Range); //四舍五入
                return num;
            } 
           temp = RandomNumBoth(0,20)
          while(that.Award.indexOf(temp)!=-1||that.Award.length==arr.length){
           
           temp = RandomNumBoth(0,20)  
            // console.log(temp)
          }
          // alert(temp)
           for(var i=0;i<arr.length;i++){
            //  console.log(arr[i])
             arr[i].className = "button hhh";
             for(var j=0;j<that.Award.length;j++){
                arr[that.Award[j]].className = "button hhh viewed";
             }
             if(i==temp){
                arr[temp].className = "button hhh selected";
             }
           }

          }, 100);
          setTimeout(function(){
            clearInterval(timer)
               
            that.Award.push(temp)
            console.log(that.Award)
            arr[temp].click()
          },5000)
      }
  },
  mounted(){
       this.getData()
       this.demoData = this.getData()
       var that = this
       var barArr
        var m3D = function () {
      /* ---- private vars ---- */
          var diapo = [],
            imb,
            scr,
            bar,
            selected,
            urlInfo,
            imagesPath = "",
            camera = {x:0, y:0, z:-650, s:0, fov: 500},
            nw = 0,
            nh = 0;
          /* ==== camera tween methods ==== */
          camera.setTarget = function (c0, t1, p) {
            if (Math.abs(t1 - c0) > .1) {
              camera.s = 1;
              camera.p = 0;
              camera.d = t1 - c0;
              if (p) {
                camera.d *= 2;
                camera.p = 9;
              }
            }
          }
          camera.tween = function (v) {
            if (camera.s != 0) {
              camera.p += camera.s;
              camera[v] += camera.d * camera.p * .01;
              if (camera.p == 10) camera.s = -1;
              else if (camera.p == 0) camera.s = 0;
            }
            return camera.s;
          }
          /* ==== diapo constructor ==== */
          var Diapo = function (n, img, x, y, z) {
            if (img) {
              this.url = img.url;
              this.title = img.title;
              this.color = img.color;
              this.isLoaded = false;
              if (document.createElement("canvas").getContext) {
                /* ---- using canvas in place of images (performance trick) ---- */
                this.srcImg = new Image();
                this.srcImg.src = imagesPath + img.src;
                this.img = document.createElement("canvas");
                this.canvas = true;
                scr.appendChild(this.img);
              } else {
                /* ---- normal image ---- */
                this.img = document.createElement('img');
                this.img.src = imagesPath + img.src;
                scr.appendChild(this.img);
              }
              /* ---- on click event ---- */
              this.img.onclick = function () {
                if (camera.s) return;
                console.log(this.diapo.isLoaded)
                if (this.diapo.isLoaded) {
                  if (this.diapo.urlActive) {
                    /* ---- jump hyperlink ---- */
                    top.location.href = this.diapo.url;
                  } else {
                    /* ---- target positions ---- */
                    camera.tz = this.diapo.z-camera.fov;
                    camera.tx = this.diapo.x;
                    camera.ty = this.diapo.y;
                    /* ---- disable previously selected img ---- */
                    if (selected) {
                      // selected.but.className = "button hhh";
                      selected.img.className = "";
                      selected.img.style.cursor = "pointer";
                      selected.urlActive = false;
                      urlInfo.style.visibility = "hidden";
                    }
                    /* ---- select current img ---- */
                    console.log(this.diapo)
                    this.diapo.but.className = "button hhh selected";
                    interpolation(false);
                    selected = this.diapo;
                  }
                }
              }
              /* ---- command bar buttons ---- */
              this.but = document.createElement('div');
              this.but.className = "button hhh";
              bar.appendChild(this.but);
              this.but.diapo = this;
              this.but.style.left = Math.round((this.but.offsetWidth  * 1.2) * (n % 4)) + 'px';
              this.but.style.top  = Math.round((this.but.offsetHeight * 1.2) * Math.floor(n / 4)) + 'px';
              this.but.onclick = this.img.onclick;
              imb = this.img;
              this.img.diapo = this;
              this.zi = 25000;
               barArr = bar
            } else {
              /* ---- transparent div ---- */
              this.img = document.createElement('div');
              this.isLoaded = true;
              this.img.className = "fog";
              scr.appendChild(this.img);
              this.w = 300;
              this.h = 300;
              this.zi = 15000;
            }
            /* ---- object variables ---- */
            this.x = x;
            this.y = y;
            this.z = z;
            this.css = this.img.style;


          }
          /* ==== main 3D animation ==== */
          Diapo.prototype.anim = function () {
            if (this.isLoaded) {
              /* ---- 3D to 2D projection ---- */
              var x = this.x - camera.x;
              var y = this.y - camera.y;
              var z = this.z - camera.z;
              if (z < 20) z += 5000;
              var p = camera.fov / z;
              var w = this.w * p;
              var h = this.h * p;
              /* ---- HTML rendering ---- */
              this.css.left   = Math.round(nw + x * p - w * .5) + 'px';
              this.css.top    = Math.round(nh + y * p - h * .5) + 'px';  
              this.css.width  = Math.round(w) + 'px';
              this.css.height = Math.round(h) + 'px';
              this.css.zIndex = this.zi - Math.round(z);
            } else {
              /* ---- image is loaded? ---- */
              this.isLoaded = this.loading();
            }
          }
          /* ==== onload initialization ==== */
          Diapo.prototype.loading = function () {
            if ((this.canvas && this.srcImg.complete) || this.img.complete) {
              if (this.canvas) {
                /* ---- canvas version ---- */
                this.w = this.srcImg.width;
                this.h = this.srcImg.height;
                this.img.width = this.w;
                this.img.height = this.h;
                var context = this.img.getContext("2d");
                context.drawImage(this.srcImg, 0, 0, this.w, this.h);
              } else {
                /* ---- plain image version ---- */
                this.w = this.img.width;
                this.h = this.img.height;
              }
              /* ---- button loaded ---- */
              this.but.className += " loaded";
              return true;
            }
            return false;
          }
          ////////////////////////////////////////////////////////////////////////////
          /* ==== screen dimensions ==== */
          var resize = function () {
            nw = scr.offsetWidth * .5;
            nh = scr.offsetHeight * .5;
          }
          /* ==== disable interpolation during animation ==== */
          var interpolation = function (bicubic) {
            var i = 0, o;
            while( o = diapo[i++] ) {
              if (o.but) {
                o.css.msInterpolationMode = bicubic ? 'bicubic' : 'nearest-neighbor'; // makes IE8 happy
                o.css.imageRendering = bicubic ? 'optimizeQuality' : 'optimizeSpeed'; // does not really work...
              }
            }
          }
          /* ==== init script ==== */
          var init = function (data) {
            /* ---- containers ---- */
            scr = document.getElementById("screen");
            bar = document.getElementById("bar");
            urlInfo = document.getElementById("urlInfo");
            resize();
            /* ---- loading images ---- */
            var i = 0, 
                o,
              n = data.length;
            while( o = data[i++] ) {
              /* ---- images ---- */
              var x = 1000 * ((i % 4) - 1.5);
              var y = Math.round(Math.random() * 4000) - 2000;
              var z = i * (5000 / n);
              diapo.push( new Diapo(i - 1, o, x, y, z));
              /* ---- transparent frames ---- */
              var k = diapo.length - 1;
              for (var j = 0; j < 3; j++) {
                var x = Math.round(Math.random() * 4000) - 2000;
                var y = Math.round(Math.random() * 4000) - 2000;
                diapo.push( new Diapo(k, null, x, y, z + 100));
              }
            }
            /* ---- start engine ---- */
            run();
          }
          ////////////////////////////////////////////////////////////////////////////
          /* ==== main loop ==== */
          var run = function () {
            /* ---- x axis move ---- */
            if (camera.tx) {
        
              if (!camera.s) camera.setTarget(camera.x, camera.tx);
              var m = camera.tween('x');
              if (!m) camera.tx = 0;
            /* ---- y axis move ---- */
            } else if (camera.ty) {
              if (!camera.s) camera.setTarget(camera.y, camera.ty); 
              var m = camera.tween('y');
              if (!m) camera.ty = 0;
            /* ---- z axis move ---- */
            } else if (camera.tz) {
              if (!camera.s) camera.setTarget(camera.z, camera.tz);
              var m = camera.tween('z');
              if (!m) {
                /* ---- animation end ---- */
                camera.tz = 0;
                interpolation(true);
                /* ---- activate hyperlink ---- */
                if (selected.url) {
                  selected.img.style.cursor = "pointer";
                  selected.urlActive = true;
                  selected.img.className = "href";
                  urlInfo.diapo = selected;
                  urlInfo.onclick = selected.img.onclick;
                  urlInfo.innerHTML = selected.title || selected.url;
                  urlInfo.style.visibility = "visible";
                  urlInfo.style.color = selected.color || "#fff";
                  urlInfo.style.top = Math.round(selected.img.offsetTop + selected.img.offsetHeight - urlInfo.offsetHeight - 5) + "px";
                  urlInfo.style.left = Math.round(selected.img.offsetLeft + selected.img.offsetWidth - urlInfo.offsetWidth - 5) + "px";
                } else {
                  selected.img.style.cursor = "default";
                }
              }
            }
            /* ---- anim images ---- */
            var i = 0, o;
            while( o = diapo[i++] ) o.anim();
            /* ---- loop ---- */
            setTimeout(run, 32);
          }
          
          return {
            ////////////////////////////////////////////////////////////////////////////
            /* ==== initialize script ==== */
            init : init
          }

      }();
    
      /* ==== start script ==== */
      setTimeout(function() {
        m3D.init(
           that.arr
        );
      }, 100);
  }
}
</script>

<style>
  
  /* screen */
  #screen{position:absolute;width:100%;height:100%;background:#000;overflow:hidden;}
  #screen img, canvas{position:absolute;left:-9999px;cursor:pointer;image-rendering:optimizeSpeed;}
  #screen .href{border:#FFF dotted 1px;}
  #screen .fog{position:absolute;background:#fff;opacity:0.1;filter:alpha(opacity=10);}
  #command{position:absolute;left:1em;top:1em;width:130px;z-index:30000;background:#000;border:#000 solid 1em;}
  #bar{position:relative;left:1em;top:1em;height:50em}
  #bar .button{position:absolute;background:#222;width:20px;height:20px;cursor:pointer;}
  #bar .loaded{background:#666;}
  #bar .viewed{background:#fff;}
  #bar .selected{background:#f00;}
  #urlInfo{position:absolute;background:url(../assets/images/69833ed09a.jpg) no-repeat 0 4px;visibility:hidden;z-index:3000000;padding-left:12px;cursor:pointer;}
</style>
