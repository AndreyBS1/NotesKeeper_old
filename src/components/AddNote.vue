<template>
  <div>
    <form v-on:submit.prevent="addNote">
      <h3>Note title:</h3>
      <input
          v-model="new_note_title"
          placeholder="Enter note title"
      >

      <h3>Note text:</h3>
      <input
          v-model="new_note_text"
          placeholder="Enter note text"
      >

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {path} from "@/config";
import {Request} from "@/config";

export default {
  name: "AddNote",
  data: () => ({
    new_note_title: null,
    new_note_text: null,
  }),
  methods: {
    addNote() {
      let data = {
        note_title: this.new_note_title,
        note_text: this.new_note_text,
      }
      Request.postRequest(path.post, data);
    }
  },
}
</script>

<style scoped>

</style>