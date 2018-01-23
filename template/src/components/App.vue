<template>
  <div class="">
    <FundamentNav></FundamentNav>
    <main>
      <router-view name="Content"></router-view>
    </main>
    <FundamentFooter></FundamentFooter>
  </div>
</template>

<script>
  import FundamentNav from './FundamentNav'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import FundamentFooter from './FundamentFooter'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    components: {
      FundamentNav,
      FundamentFooter,
    },
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return {
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
