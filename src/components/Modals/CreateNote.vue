<template>
  <div>
    <form @submit.prevent="addNote">
      <h3>Note title:</h3>
      <input
          v-model.trim="createdNoteTitle"
          placeholder="Enter note title"
      >

      <h3>Note text:</h3>
      <input
          v-model.trim="createdNoteText"
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

export default {
  name: "CreateNote",

  data() {
    return {
      createdNoteTitle: null,
      createdNoteText: null,
    }
  },

  methods: {
    addNote() {
      let data = {
        note_title: this.createdNoteTitle,
        note_text: this.createdNoteText,
      };

      if (data.note_title === null && data.note_text === null) {
        alert("Enter title or text!")
      } else {
        Request.postRequest(path.post, data);
        this.$emit('close');
      }
    },
  },
}
</script>

<style scoped>

</style>