<template>
  <FundamentNav></FundamentNav>
  <main>
    <router-view name="Content"></router-view>
  </main>
  <FundamentFooter></FundamentFooter>
</template>

<script>
  import FundamentNav from './FundamentNav.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import FundamentFooter from './FundamentFooter.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return {
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
