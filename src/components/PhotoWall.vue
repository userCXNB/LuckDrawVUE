<template>

  <div id='index' v-on:keyup.13='LuckDraw($event)'>
    <div :style="'width:100%;height:100%;z-index:1000000;background:url(./static/images/background.jpg);background-size:100% 100%;'+indexStyle1">
       <ul style="width:100%;height:100%;position:absolute;bottom:0;margin:auto;z-index:1000000;display:flex;justify-content:space-around;">
          <li style=""  class="li" v-for="(item,index) in prizeList">
               <div style="text-align:center;">
                  <img :src="item.src" style="width:100%;">
                  <div><img :src="item.prizeSrc" style="width:80%;"></div>
               </div>
          </li>   
       </ul>

    </div>

   
    <div id="screen" :style="'width:100%;height:100%;z-index:1000000;background:url(./static/images/background.jpg);background-size:100% 100%;'+indexStyle2">
      
      
      <div style="width:10%;height:25%;z-index:8000000;float:right;" v-show="!state">
          <div class="page-header">
                <h1 v-for="(item,index) in titlelist" :style="item.style+'text-align:center;'">{{item.prize}}</h1>   
          </div>
          <div  v-for="(item,index) in arr" style="width:80%;margin:0 10%;">
            <div style="margin-bottom:0.16rem;margin-top:0.5rem;">
                <div style="display:flex;">
                               <input type="checkbox" @click="opt(item.name,index)" aria-label="..." v-model='checklist[index]' :disabled='checklist[index]'/>
                               <input type="text" class="form-control" style="text-align:center;width:100%;font-size:0.16rem;" aria-label="..." :value="item.name" disabled="true"/>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
         </div>
          <p style="text-align:center;margin-top:0.2rem">
            <button type="button" class="btn btn-primary btn-lg" @click="restore()" style="font-size:0.16rem">一键还原</button>
            <button type="button" class="btn btn-primary btn-lg" @click="submit()" style="font-size:0.16rem" :disabled='!state'>提交</button>
         </p>
      </div>



      <div style="width:100%;height:100%;z-index:1000000;" >
          <div class="mask" v-for="(item,index) in arr" :style="item.mask+'background:url('+item.src+')'"></div>
      </div>
      <div style="width:800px;height:150px;position:fixed;left:0;right:0;top:0;margin:auto;z-index:1000000;overflow:hidden">
        <vue-star v-for="(item,index) in prizeList" animate="animated bounceIn" color="#F05654" v-show="item.bb" :key="index">
          <i slot="icon" class="fa fa-heart" v-on:keyup.13='LuckDraw($event)' :style="'margin-left:660px;display:block;margin-top:50px;font-size:30px;width:558px;height:150px;text-align:center;lineHeight:150px;background:url('+item.prizeSrc+') center center / 100% no-repeat;'"></i>
        </vue-star>
        <!-- <vue-star animate="animated bounceIn" color="#F05654" v-show="temp==5">
          <i slot="icon" class="fa fa-heart" v-on:click='fanz' style="margin-left:100px;display:block;font-size:30px;width:150px;height:150px;text-align:center;lineHeight:150px;">查看结果</i>
        </vue-star> -->
      </div>
      <div id="command" style="visibility:hidden">
          <div id="bar"></div>
      </div>
      <div id="urlInfo"></div>
    </div>

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
      mask: 'transform: scale(1);',
      temp:0,
      text:0,
      state:false,
      arrTemp:0,
      indexStyle1:'',
      indexStyle2:'',
      prizeList:[
                {"aa":'最佳人气奖',bb:true,result:'1',src:'./static/images/yf.jpg',prizeSrc:'./static/images/rq.png'},
                {"aa":'最佳表演奖',bb:false,result:'5',src:'./static/images/yf.jpg',prizeSrc:'./static/images/by.png'},
                {"aa":'最佳创意奖',bb:false,result:'2',src:'./static/images/yf.jpg',prizeSrc:'./static/images/cy.png'},     
                {"aa":'最佳风采奖',bb:false,result:'4',src:'./static/images/yf.jpg',prizeSrc:'./static/images/fc.png'},
                {"aa":'最佳服装奖',bb:false,result:'3',src:'./static/images/yf.jpg',prizeSrc:'./static/images/fz.png'},        
      ],
       checklist:[false,false,false,false,false],
      titlelist:[
          {"prize":'最佳人气奖',style:'transition:0.5s;opacity:1;font-size:0.3rem;margin:0px;padding:0px;height:0.3rem;',department:""},
          {"prize":'最佳表演奖',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":'最佳创意奖',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":'最佳风采奖',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":'最佳服装奖',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":'请提交',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":'提交中...',style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""},
          {"prize":"投票关闭",style:'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;',department:""}
      ],
      arr:[
            { src: './static/images/yf.jpg',name:"研发部",result:'1',mask: 'transform: scale(4.5);' },
            { src: './static/images/151.jpg',name:"151项目组",result:'2',mask: 'transform: scale(4.5);' },
            { src: './static/images/xs.jpg',name:"销售部",result:'3',mask: 'transform: scale(4.5);' },
            { src: './static/images/yy.jpg',name:"运营部",result:'4',mask: 'transform: scale(4.5);' },
            { src: './static/images/cp.jpg',name:"产品部",result:'5',mask: 'transform: scale(4.5);' },
        
          ],
      Award:[],
      demoData:{a:'0000'}    
    }
  },
  methods:{
      ...mapGetters(['getData']),
      fanz(){
           
      },
      opt:function(item,index){
        this.titlelist[this.text].department = item? item:"";
        this.titlelist[this.text].style = 'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;'
        this.titlelist[this.text+1].style = 'transition:0.5s;opacity:1;font-size:0.3rem;margin:0px;padding:0px;height:0.3rem;'
        this.prizeList[this.text].result = index+1;

        this.text++
          if(this.text == 5){
            console.log(this.prizeList)
            this.state = true;
          }
      },
      restore:function(){
        for(var i = 0;i<this.checklist.length;i++){
            this.checklist[i] = false
        }
        for(var i = 0;i<this.titlelist.length;i++){
            console.log(this.titlelist[i].department)
            this.titlelist[i].department = ""
        }
        this.titlelist[this.text].style = 'transition:0.5s;opacity:0;font-size:0rem;margin:0px;padding:0px;height:0rem;'
        this.text = 0;
        this.titlelist[0].style = 'transition:0.5s;opacity:1;font-size:0.3rem;margin:0px;padding:0px;height:0.3rem;'
        this.state = false;
    },
      LuckDraw(){
           if(this.temp == 5){
              
                this.indexStyle1='opacity:1;transform:rotateY(360deg);'
                this.indexStyle2='opacity:0;transform:rotateY(180deg);'
          }
 
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
           temp = RandomNumBoth(0,4)
          while(that.Award.indexOf(temp)!=-1||that.Award.length==arr.length){
           
           temp = RandomNumBoth(0,4)  
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

          }, 10);
          setTimeout(function(){
            
            if(that.temp<4){
             clearInterval(timer)
            }
            if(that.temp<5){

                for(var i = 0;i<that.arr.length;i++){
                  if(that.arr[i].result==that.prizeList[that.temp].result){
                    console.log(i,that.temp)
                      // that.Award.push(i)
                      that.prizeList[that.temp].src = that.arr[i].src
                      arr[i].click()
                      console.log(i)
                      that.arrTemp = i
                  }

                }
            }
          },500)

      }
  },
  mounted(){
    

       this.getData()
       this.demoData = this.getData()
       var that = this
               document.onkeydown=function(event){
             var e = event || window.event || arguments.callee.caller.arguments[0];          
              if(e && e.keyCode==13){ // enter 键
                  //要做的事情
                  that.LuckDraw()
               }
        }; 
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
          var Diapo = function (n, img, x, y, z,name) {
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
                this.img.className = "cvs";
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
            var cvsList = document.querySelectorAll('canvas')
            var cvsArr = Array.prototype.slice.apply(cvsList);
                if (camera.s) return;
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
                    this.diapo.but.className = "button hhh selected";
                    interpolation(false);
                    selected = this.diapo;
                  }
                }
                  setTimeout(function(){
                      
                      // cvsArr[that.arrTemp].parentNode.removeChild(cvsArr[that.arrTemp]);
                      console.log(cvsArr)
                      that.arr[that.arrTemp].mask = "visibility:visible;transform: scale(0);background-repeat:no-repeat;background-size:100% 100%;" 
                          setTimeout(function(){
                            cvsArr[that.arrTemp].style='visibility:hidden;'
  
                          },100)
                          setTimeout(function(){
                            if(that.temp<4){
                          that.prizeList[that.temp+1].bb = true
                            }
                            if(that.temp<5){
                          that.prizeList[that.temp].bb = false
                            }
                              that.temp++
                          },1000)

                    },3500)
              }
              /* ---- command bar buttons ---- */
              this.but = document.createElement('div');
              this.but.className = "button hhh";
              bar.appendChild(this.but);
              this.but.diapo = this;
              this.but.style.width="100%"
              this.but.style.height="30px"
              this.but.style.marginBottom="10px"
              this.but.style.textAlign = "center"
              this.but.style.lineHeight = "30px"
              // this.but.style
              this.but.style.position = 'static'
              this.but.style.border="1px solid red"
              this.but.innerText = name
              // this.but.style.left = Math.round((this.but.offsetWidth  * 1.2) * (n % 4)) + 'px';
              // this.but.style.top  = Math.round((this.but.offsetHeight * 1.2) * Math.floor(n / 4)) + 'px';
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
                this.w = this.srcImg.width/3.8;
                this.h = this.srcImg.height/3.8;
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
                nameList = ['研发部','销售部','运营部','产品部','人事部'],
              n = data.length;
            while( o = data[i++] ) {
              /* ---- images ---- */
              var x = 1000 * ((i % 4) - 1.5);
              var y = Math.round(Math.random() * 4000) - 2000;
              var z = i * (5000 / n);
              diapo.push( new Diapo(i - 1, o, x, y, z,nameList[i-1]));
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
  *{padding: 0;margin: 0;}
  /*翻转*/
  #index{width:100%;height:100%;position:relative;perspective:1200px;}
  #index>div{position:absolute;transition:.5s linear;box-shadow:0 0 5px #000;}
  #index>div:nth-child(1){opacity:0;transform:rotateY(180deg);}

  /* #index:hover>div:nth-child(1){opacity:1;transform:rotateY(360deg);}
  #index:hover>div:nth-child(2){opacity:0;transform:rotateY(180deg);} */

  #screen{position:absolute;width:100%;height:100%;overflow:hidden;}
  #screen img, canvas{position:absolute;left:-9999px;cursor:pointer;image-rendering:optimizeSpeed;}
  #screen .href{border:#FFF dotted 1px;}
  #screen .fog{position:absolute;background:#fff;opacity:0.1;filter:alpha(opacity=10);}
  #command{position:absolute;left:1em;top:1em;width:130px;z-index:30000;background:#000;border:#000 solid 1em;}
  #bar{position:relative;left:1em;top:1em;height:50em}
  #bar .button{position:absolute;background:#222;width:20px;height:20px;cursor:pointer;}
  #bar .loaded{background:#666;}
  #bar .viewed{background:#fff;}
  #bar .selected{background:#f00;}
  ul,li{ padding:0;margin:0;list-style:none}
  .li{
    width:320px;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .mask{
    visibility:hidden;
    transition:1.5s ease all;
    width:354px;
    height:472px;
    background:green;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    z-index:1000000;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  #urlInfo{position:absolute;background:url(../assets/images/69833ed09a.jpg) no-repeat 0 4px;visibility:hidden;z-index:3000000;padding-left:12px;cursor:pointer;}
</style>
