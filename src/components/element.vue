<template>
    <div>
            <p>组件值：{{ value13 }}</p>
            <el-date-picker v-model="value13" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            　<div>
        　　　　<!--editor的div为富文本的承载容器-->
        　　　　<div id="editor"></div>
        　　　　<button type="" @click="gettext">点击</button>
        　　　</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             value13: '',
              data: [{
                label: '一级 1',
                children: [{
                  label: '二级 1-1',
                  children: [{
                    label: '三级 1-1-1'
                  }]
                }]
              }, {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              }, {
                label: '一级 3',
                children: [{
                  label: '二级 3-1',
                  children: [{
                    label: '三级 3-1-1'
                  }]
                }, {
                  label: '二级 3-2',
                  children: [{
                    label: '三级 3-2-1'
                  }]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'label'
              },
              editor: null,
        }
    },
     methods:{
      handleNodeClick(data) {
        console.log(data);
      },
       gettext() {
　　　　　　// 获取editor中的文本
        console.log(this.editor.getContent())
      }
    },
    　 mounted() {

　　　　　　// 实例化editor编辑器

　　　　　　this.editor = UE.getEditor('editor');

　　　　　　// console.log(this.editor.setContent("1223"))

       　　 },
         destroyed() {

　　// 将editor进行销毁

　　this.editor.destroy();

      　　  }
}
</script>
