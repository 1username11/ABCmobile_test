<template>
  <div class="dropdown-burger-menu">
    <div v-if="!isDropdownOpen">
      <button class="burger-menu" @click="isDropdownOpen = !isDropdownOpen">
        <span />
        <span />
        <span />
      </button>
    </div>
    <div v-else class="cross-wrapper">
      <button @click="isDropdownOpen = !isDropdownOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd" d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82
                  28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="#FFC700"
          />
        </svg>
      </button>
    </div>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <ul class="links">
        <li
          v-for="navigationItem in navigation"
          :key="navigationItem.name"
        >
          <router-link class="focus:border-b-2 border-[#f66f4d]" :to="{name: navigationItem.to}">
            {{ navigationItem.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routerNames } from '@/router/router'

const isDropdownOpen = ref(false)

const navigation = ref([
  {
    to: routerNames.home,
    name: 'ГЛАВНАЯ'
  },
  {
    to: routerNames.testInfo,
    name: 'ИНФОРМАЦИЯ О ТЕСТЕ'
  },
  {
    to: routerNames.testForm,
    name: 'ПРОЙТИ ТЕСТ'
  }
])
</script>

<style lang="scss">
.dropdown-burger-menu {
    background: #181818;
    padding: 17px 13px 17px 15px;
    position: sticky;
    width: 320px;
}
.burger-menu {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    cursor: pointer;
    background: none;
    width: 24px;
}

.burger-menu span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #DADADA;
    border-radius: 2px;
}
.dropdown-menu {
    text-align: left;
    color: #DADADA;
    background: #181818;
    padding-top: 64px;
    padding-left: 23px;
    z-index: 10;
    height: 100%;
}
.links {
  & > * {
    margin-top: 27px;
    color: #FFFFFF; /* add this line */
    :active {
      color: #F4CE0C;
    }
  }
}

.cross-wrapper{
  width:28px;
  hewidthight:28px;
  float: right;
    :first-child{
      background: none;
    }
}
</style>
