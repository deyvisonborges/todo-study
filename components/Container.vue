<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: fit-content(100px) repeat(6, auto);
  overflow-y: auto;
  position: relative;
  width: 100%;
}
</style>