exports.formatDate = function (value, fmt) {
    let getDate = new Date(value);
    let o = {
      'M+': getDate.getMonth() + 1,
      'd+': getDate.getDate(),
      'h+': getDate.getHours(),
      'm+': getDate.getMinutes(),
      's+': getDate.getSeconds(),
      'q+': Math.floor((getDate.getMonth() + 3) / 3),
      'S': getDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt;
  }

  exports.ellipsis  = function (value,num) {//限制字数
    if (!value) return ''
    if (value.length > num) {
      return value.slice(0,num) + '...'
    }
    return value
  }

  exports.strSplit  = function (value) {
    var str = 'title:*'+value.split(' ')[0]+'*'
    console.log(str)
    for(var i = 1;i<value.split(' ').length;i++){
          str+=' OR title:*'+value.split(' ')[i]+'*'
    }
    console.log(str)
    return str
  }

  exports.format = function(shijianchuo){//时间戳转换
    function add0(m){return m<10?'0'+m:m }
      console.log(shijianchuo)
     var time = new Date(shijianchuo);
     var y = time.getFullYear();
     var m = time.getMonth()+1;
     var d = time.getDate();
     var h = time.getHours();
     var mm = time.getMinutes();
     var s = time.getSeconds();
     console.log(y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s))
     return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
     }

  exports.industryStatus  = function (value) {//industryList页面状态过滤
      if(value == 1){
         return '待导入'
      }else{
         return '已导入'
      }
       
  }

  exports.nullChange = function(value){
     if(value = null){
       return ''
     }else{
       return value
     }
  }
