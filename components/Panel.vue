<template>
  <div>
    <addissue />
    <h2>Panel</h2>
    <container>
      <div>
        <h3>Frontend</h3>
        <issue />
      </div>
      <div>Backend</div>
      <div>Banco de Dados</div>
      <div>Mobile</div>
      <div>Gestão</div>
      <div>Arquitetura</div>
    </container>
  </div>
</template>

<script>
import addissue from './AddIssue';
import issue from './Issue';
import container from './Container';

export default {
  components: {
    addissue,
    container,
    issue
  }
}
</script>

<style>

</style>