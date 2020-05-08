<template>
  <div class="issue">
    <h3>{{ issue['title'] }}</h3>
    <div class="issue_tags">
      <span>{{ issue.category }}</span>
    </div>
    <div class="issue_description">{{ issue.description }}</div>
    <p class="issue_link">
      <a href></a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      issue: "issue/getIssues"
    }),
    teste() {
      console.log(this.issue)
    }
  },
  watch: {
    issue() {
      console.log(this.issue)
    }
  }
};
</script>

<style>
input,
button {
  width: auto;
  display: grid;
  position: relative;
}
.issue {
  background-color: #c4c4c4;
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  width: 300px;
}

.issue_tags {
  display: grid;
  gap: inherit;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, auto);
  height: fit-content;
  position: relative;
  width: auto;
}

.issue_tags > span {
  background-color: brown;
  border-radius: 10px;
  color: #ffffff;
  padding: 2px 4px;
  width: fit-content;
}
</style>