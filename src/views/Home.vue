<template>
  <div class="home">
    <i class="iconfont icon-xingzhuang60kaobei2" style="color: red"></i>
    <input placeholder="我修改了" v-model="value"/>
    <button @click="check">{{$t('toggle')}}</button>
    <div>{{$t('hello')}}</div>
    <div id="itxst">
    <div v-for="item in tableList" :key="item.key">{{item.lable}}</div>
    </div>
    <div>master新家一段文字，改变了</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sortable from 'sortablejs';

export default {
  name: "Home",
  data() {
    return {
      value : '',
      tableList : [
        {
          lable : '张三',
          key : 1
        },
         {
          lable : '李四',
          key : 2
        },
         {
          lable : '王五',
          key : 3
        }
      ],
      sortable : []
    };
  },
  computed : {
  
  },
  methods: {
    check () {
      this.$confirm(this.$t('togglelanguageText'),this.$t('hint'),{
          confirmButtonText: this.$t('confirm'),
          cancelButtonText: this.$t('cancel'),
          type: 'warning'
      }).then(() => {
        let locale = this.$i18n.locale;
        locale === 'en' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en';
        this.$message.success(this.$t('butInSuccess'))
      }).catch(() => {
        this.$message.info(this.$t('cancel'))
      })
    },
    init () {
      var el = document.getElementById('itxst');
        //设置配置
        var ops = {
            animation: 1000,
            //拖动结束
            onEnd: (evt) => {
              let newIndex = evt.newIndex;
              let oldIndex = evt.oldIndex;
              this.soreCustom(newIndex,oldIndex);
            },
        }
        this.sortable = Sortable.create(el, ops)
    },
    soreCustom (newIndex,oldIndex) {
      let iten = this.tableList.splice(oldIndex,1)[0];
      this.tableList.splice(newIndex,0,iten)
    }
    },
  mounted() {
      this.init()
  },
};
</script>
