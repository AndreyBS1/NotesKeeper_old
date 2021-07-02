<template>
  <div class="note">
    <div>
      <h3>{{ note.title }}</h3>
      <p>{{ note.text }}</p>
      <p>{{ note.id }}</p>

      <button v-on:click="editButton(note)">Edit</button>
      <button v-on:click="deleteNote(note.id)">Delete</button>
    </div>

    <div v-show="edited">
      <form v-on:submit.prevent="editNote(note.id)">
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
// import axios from "axios";

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
      // axios
      //     .post('http://127.0.0.1:5000/edit',
      //         {
      //           note_id: noteId,
      //           new_note_title: this.editedNoteTitle,
      //           new_note_text: this.editedNoteText,
      //         })
      //     .then(() => {
      //       console.log("UPDATE")
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
      this.edited = false;
    },
    deleteNote(noteId) {
      let data = {
        note_id: noteId,
      }
      Request.deleteRequest(path.delete, data)
      // console.log(noteId)
      // axios
      //     .post('http://127.0.0.1:5000/delete',
      //         {
      //           note_id: noteId,
      //         })
      //     .then(() => {
      //       console.log("DELETE")
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
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