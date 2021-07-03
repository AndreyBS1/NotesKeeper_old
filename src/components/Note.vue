<template>
  <div class="note">
    <div>
      <h3>{{ note.title }}</h3>
      <p>{{ note.text }}</p>
      <p>{{ note.id }}</p>

      <button @click="editButton(note)">Edit</button>
      <button @click="deleteNote(note.id)">Delete</button>
    </div>

    <div v-show="edited">
      <form @submit.prevent="editNote(note.id)">
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

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {path} from "@/config";
import {Request} from "@/config";

export default {
  name: "Note",
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
      edited: false,
      editedNoteTitle: null,
      editedNoteText: null,
    }
  },
  methods: {
    editButton(note) {
      this.edited = true;
      this.editedNoteTitle = note.title;
      this.editedNoteText = note.text;
    },
    editNote(noteId) {
      let data = {
        note_id: noteId,
        new_note_title: this.editedNoteTitle,
        new_note_text: this.editedNoteText,
      }
      Request.putRequest(path.put, data)
      this.edited = false;
    },
    deleteNote(noteId) {
      let data = {
        note_id: noteId,
      }
      Request.deleteRequest(path.delete, data)
    }
  },
}
</script>

<style scoped>
.note {
  margin: 1%;
  min-width: 15vw;
  max-width: 20vw;
  min-height: 30vh;
  max-height: 40vh;
}
</style>