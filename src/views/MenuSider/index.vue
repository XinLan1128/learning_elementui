<template>
  <div class="main">
    <div class="menuSider">
      <span>侧边栏导航</span>
      <div class="item" v-for="(item, index) in menuList" :key="item + index">
        <div class="item-title">{{ item.name }}</div>
        <template v-if="item.children">
          <ul class="child">
            <li
              class="child-item"
              v-for="(item, index) in item.children"
              :key="index"
            >
              <a :href="item.path">{{ item.name }}</a>
            </li>
          </ul>
        </template>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-sider",
  data() {
    return {
      menuList: [
        {
          name: "Basic",
          children: [
            {
              name: "Button 按钮",
              path: "/button",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
        {
          name: "Form",
          children: [
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
        {
          name: "Form",
          children: [
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
        {
          name: "Form3333",
          children: [
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
        {
          name: "Form2222",
          children: [
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
        {
          name: "Form111",
          children: [
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
            {
              name: "Button 按钮111",
            },
            {
              name: "Button 按钮222",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
ul {
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.main {
  display: flex;
  height: 100vh;
}
.menuSider,
.content {
  overflow: scroll;
}
.menuSider {
  width: 200px;
  margin: 15px;
  height: 100vh;
  overflow: auto;
  .item {
    margin: 20px 0;
  }
  .item-title {
    font-size: 12px;
    color: #999;
  }
  .child {
    display: flex;
    flex-direction: column;
    height: auto;
    .child-item {
      height: 40px;
      line-height: 40px;
    }
    .child-item a {
      font-size: 14px;
      color: #444;
      cursor: pointer;
    }
    .child-item a:hover {
      color: #409eff;
    }
  }
}
.content {
  flex: 1;
  margin: 15px;
  height: 100vh;
  overflow: auto;
}
</style>
