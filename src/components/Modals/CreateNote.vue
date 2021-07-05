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
        <button type="reset" @click="$emit('closeCreateModal')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import {path} from "@/config";
import {Request} from "@/config";

export default {
  name: "CreateNote",

  emits: ['closeCreateModal', 'createdNote'],

  data() {
    return {
      createdNoteTitle: null,
      createdNoteText: null,
    }
  },

  methods: {
    async addNote() {
      if (this.createdNoteTitle === null && this.createdNoteText === null) {
        await alert("Enter title or text!")
      } else {
        let data = {
          note_title: this.createdNoteTitle,
          note_text: this.createdNoteText,
        };
        await Request.postRequest(path.post, data);
        this.$emit('closeCreateModal');
        this.$emit('createdNote');
      }
    },
  },
}
</script>

<style scoped>

</style>