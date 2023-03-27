<script setup>
import { RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue'
import HeaderView from './components/HeaderView.vue'
import PageLayout from './components/PageLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/')
</script>

<template>
  <PageLayout>
    <template #header>
      <HeaderView />
    </template>

    <template #main>
      <RouterView />
    </template>

    <FooterView class="foot" />
  </PageLayout>
</template>

<style>
.foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
</style>
