<template>
  <div class="page-menu">
    <dl class="nav" @mouseleave="hideMenu">
      <dt>全部分类</dt>
      <dd v-for="(item, index) of menuList" :key="index" @mouseenter="showMenu(item.children)">
        <i class="iconfont" :class="item.icon"></i>
        <a href="#" v-for="(subItem, subIndex) of item.title" :key="subIndex">
          {{ subItem }}
          <span v-if="subIndex != item.title.length - 1">/</span>
        </a>
        <i class="el-icon-arrow-right" />
      </dd>
    </dl>
    <div class="detail" v-if="isShowMenu" @mouseenter="enterDetail" @mouseleave="hideMenu">
      <template>
        <div class="wrap" v-for="item of menuDetails" :key="item.title">
          <h2>
            {{ item.title }}
            <a href="#">
              更多
              <i class="el-icon-arrow-right" />
            </a>
          </h2>
          <a href="#" v-for="(sub, index) of item.subMenu" :key="index">{{sub}}</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          icon: 'icon-meishi',
          title: ['美食'],
          children: [
            {
              title: '美食',
              subMenu: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请',
                '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串',
                '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜',
                '创意菜', '汤/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜']
            }
          ]
        },
        {
          icon: 'icon-_waimai',
          title: ['外卖'],
          children: [
            {
              title: '外卖',
              subMenu: ['美团外卖']
            }
          ]
        },
        {
          icon: 'icon-jiudian',
          title: ['酒店 HOT'],
          children: [
            {
              title: '酒店星级',
              subMenu: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          icon: 'icon-minsu_',
          title: ['民宿'],
          children: [
            {
              title: '热门城市',
              subMenu: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州', '西安', '武汉', '厦门', '长沙', '青岛', '深圳', '天津', '苏州']
            },
            {
              title: '热门房源',
              subMenu: ['复式Loft', '别墅']
            }
          ]
        },
        {
          icon: 'icon-Artboard',
          title: ['猫眼电影'],
          children: [
            {
              title: '热映电影',
              subMenu: ['多力特的奇幻冒险', '喋血战士', '误杀', '寻梦环游记', '抵达之谜', '疯狂动物城', '当幸福来敲门', '第一次的离别', '风声', '哪吒之魔童降世']
            },
            {
              title: '热门影院',
              subMenu: ['万达影城', '耀莱成龙国际影城', '大地影院', '保利国际影城', '博纳国际影城', 'CGV影城', '金逸影城', '中影国际影城', '新华国际影', '城星美国际影城']
            }
          ]
        },
        {
          icon: 'icon-jipiao',
          title: ['机票', '火车票'],
          children: [
            {
              title: '机票',
              subMenu: ['国内机票', '国际/港澳台机票']
            },
            {
              title: '火车票',
              subMenu: ['火车票']
            }
          ]
        },
        {
          icon: 'icon-_xiuxianyule',
          title: ['休闲娱乐', 'KTV'],
          children: [
            {
              title: '休闲娱乐',
              subMenu: ['足疗按摩', '洗浴/汗蒸', '酒吧', '密室逃脱', '轰趴馆', '茶馆', '私人影院', 'DIY手工坊', '采摘/农家乐', '网吧网咖', '游乐游艺', 'VR桌面游戏', '真人CS', '棋牌室', '其他玩乐']
            }
          ]
        },
        {
          icon: 'icon-shenghuofuwu',
          title: ['生活服务'],
          children: [
            {
              title: '生活服务',
              subMenu: ['衣物/皮具洗护', '家政', '搬家运输', '送水', '充值缴费', '服饰/鞋包养护', '开锁换锁', '维修居家', '管道疏通', '家电维修清洗', '电脑维修', '手机维修证', '件照/肖像摄影', '照片冲印/图文文印', '商务服务/法律服务', '文化传媒机构', '成人用品/情趣用品']
            }
          ]
        },
        {
          icon: 'icon-nv',
          title: ['丽人', '美发', '医学美容'],
          children: [
            {
              title: '丽人',
              subMenu: ['美发', '美甲美睫', '美容美体', '医学美容', '瑜伽舞蹈', '瘦身纤体', '韩式定妆', '祛痘', '纹身', '化妆品', '养发']
            }
          ]
        },
        {
          icon: 'icon-icon-test1',
          title: ['结婚', '婚纱摄影', '婚宴'],
          children: [
            {
              title: '结婚',
              subMenu: ['婚纱摄影', '旅拍', '个性写真', '婚宴', '婚庆公司', '婚纱礼服', '西服定制', '婚戒首饰', '婚车租赁', '司仪主持', '彩妆造型', '婚礼跟拍', '婚礼小礼品', '更多婚礼服务']
            }
          ]
        },
        {
          icon: 'icon-qinziyou',
          title: ['亲子', '儿童乐园', '幼教'],
          children: [
            {
              title: '儿童乐园',
              subMenu: ['婴儿游泳', '其它亲子游乐']
            },
            {
              title: '幼儿教育',
              subMenu: ['早教中心', '少儿英语', '智力开发', '托班/幼儿园', '幼儿教育', '其他幼儿教育']
            },
            {
              title: '亲子摄影',
              subMenu: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影']
            },
            {
              title: '孕产护理',
              subMenu: ['月子会所', '产后恢复', '妇幼医院', '孕产用品', '开奶催乳', '月嫂', '亲子购物', '宝宝派对', '亲子服务']
            }
          ]
        },
        {
          icon: 'icon-icon-test',
          title: ['运动健身', '健身中心'],
          children: [
            {
              title: '运动健身',
              subMenu: ['健身中心', '武术场馆', '游泳馆', '羽毛球馆', '溜冰场', '射箭馆', '篮球场', '网球馆', '台球馆', '乒乓球', '足球场', '高尔夫场', '保龄球馆', '体育场馆', '马术场', '壁球馆', '更多运动']
            }
          ]
        },
        {
          icon: 'icon-_jiazhuangsheji',
          title: ['家装', '建材', '家居'],
          children: [
            {
              title: '精修设计',
              subMenu: ['半包装修', '全包装修', '清包装修']
            },
            {
              title: '装修建材',
              subMenu: ['地板瓷砖', '石材', '橱柜', '灯饰照明', '厨卫洁具', '油漆涂料', '集成吊顶', '墙纸', '墙艺', '门窗', '木材板材', '家用五金', '电工电料', '楼梯', '管材管件']
            },
            {
              title: '家具家居',
              subMenu: ['家具', '床上用品/家纺', '家居饰品', '厨具', '餐具', '智能家居']
            },
            {
              title: '假装卖场',
              subMenu: ['建材卖场', '家居卖场', '灯饰卖场']
            }
          ]
        },
        {
          icon: 'icon-xuexi',
          title: ['学习培训', '音乐培训'],
          children: [
            {
              title: '音乐培训',
              subMenu: ['钢琴', '吉他', '小提琴', '古筝', '架子鼓', '声乐', '其他音乐培训']
            },
            {
              title: '职业培训',
              subMenu: ['美容', '化妆', '会计', 'IT', '厨艺', '管理', '培训摄影', '培训司法考试', '公务员培训', '其他职业培训']
            },
            {
              title: '外语培训',
              subMenu: ['英语', '日语', '韩语', '法语', '德语', '汉语', '俄语', '西班牙语', '其他外语']
            },
            {
              title: '美术培训',
              subMenu: ['绘画', '书法', '其他美术']
            }
          ]
        },
        {
          icon: 'icon-yiliaoxiang',
          title: ['医疗健康', '宠物', '爱车'],
          children: [
            {
              title: '医疗健康',
              subMenu: ['医院', '齿科口腔', '体检中心', '药店', '中医', '其他健康服务']
            },
            {
              title: '爱车',
              subMenu: ['洗车', '租车', '加油站', '维修保养', '驾校', '汽车美容', '陪练', '汽车用品', '停车场', '汽车保险', '4S店/汽车销售', '更多汽车服务', '机油保养', '汽车报价', '二手车', '广告驾校', '交警队', '汽车改装', '汽车配件']
            },
            {
              title: '宠物',
              subMenu: ['宠物店', '宠物医院']
            }
          ]
        },
        {
          icon: 'icon-jiuba',
          title: ['酒吧', '密室逃脱'],
          children: [
            {
              title: '玩乐',
              subMenu: ['KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR', '其他玩乐']
            }
          ]
        }
      ],
      isShowMenu: false,
      menuDetail: null
    }
  },
  methods: {
    showMenu(item) {
      this.isShowMenu = true
      this.menuDetail = item
    },
    hideMenu() {
      this.isShowMenu = false
    },
    enterDetail() {
      this.isShowMenu = true
    }
  },
  computed: {
    menuDetails() {
      // console.log(this.menuDetail[0].title)
      return this.isShowMenu ? this.menuDetail : null
    }
  }
}
</script>

<style lang="less" scoped>
@import url("http://at.alicdn.com/t/font_1967842_n8atbcvqxgn.css");
@import "../../assets/css/views/menu.less";
</style>
