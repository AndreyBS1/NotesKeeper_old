<template>
  <div>
    <form @submit.prevent="editNote">
      <h3>Note title:</h3>
      <input
          v-model="editedNoteTitle"
          placeholder="Enter note title"
      >

      <h3>Note text:</h3>
      <input
          v-model="editedNoteText"
          placeholder="Enter note text"
      >

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {path, Request} from "@/config";

export default {
  name: "EditNote",

  props: {
    note: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      editedNoteId: this.note.id,
      editedNoteTitle: this.note.title,
      editedNoteText: this.note.text,
    }
  },

  methods: {
    editNote() {
      let data = {
        note_id: this.editedNoteId,
        new_note_title: this.editedNoteTitle,
        new_note_text: this.editedNoteText,
      };
      Request.putRequest(path.put, data);
      this.$emit('close');
      this.$emit('update');
    },
  }
}
</script>

<style scoped>

</style>