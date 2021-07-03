<template>
  <div>
    <form @submit.prevent="addNote">
      <h3>Note title:</h3>
      <input
          v-model.trim="new_note_title"
          placeholder="Enter note title"
      >

      <h3>Note text:</h3>
      <input
          v-model.trim="new_note_text"
          placeholder="Enter note text"
      >

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {path} from "@/config";
import {Request} from "@/config";
// import Modal from "@/components/Modal";

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
      this.$emit('close');
    }
  },
}
</script>

<style scoped>

</style>