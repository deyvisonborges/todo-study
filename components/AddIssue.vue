<template>
  <div>
    <div class="add_issue">
      <div class="add_tag">
        <input 
          v-model="vtag_title" 
          type="text" 
          name="tag_title" 
          placeholder="title"
        />
        <select v-model="vtag_category">
          <option value="frontend" selected>frontend</option>
          <option value="backend">backend</option>
          <option value="devops">devops</option>
        </select>
      </div>
      <input
        v-model="vtag_description"
        type="text"
        name="tag_description"
        placeholder="description"
      />
      <button @click="addIssueToStore">add issue</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      vtag_title: null,
      vtag_category: null,
      vtag_description: null,
    };
  },
  methods: {
    ...mapMutations({
      insertIssue: 'issue/INSERT_ISSUE'
    }),

    addIssueToStore() {
      this.insertIssue({
        issue: {
          title: this.vtag_title,
          category: this.vtag_category,
          description: this.vtag_description
        }
      });
    }
  }
};
</script>

<style>
input,
select,
button {
  height: fit-content;
  position: relative;
  width: auto;
}

.add_issue {
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  width: 600px;
}

.add_tag {
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  position: relative;
  width: inherit;
}
</style>