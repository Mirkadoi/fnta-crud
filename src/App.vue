<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">MEVN</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li v-for="item in NAV_ITEM" :key="item.name" class="nav-item mx-1">
            <router-link class="nav-link" :to="item.to">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        created() {
            this.NAV_ITEM = [
                {
                    name: 'Create Student',
                    to: '/'
                },
                {
                    name: 'View students',
                    to: '/view'
                }
            ]
        },
    }
</script>
