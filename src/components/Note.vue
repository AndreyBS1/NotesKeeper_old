<template>
  <div class="note-card">
    <div class="note-card-body">
      <h3>{{ note.title }}</h3>
      <p>{{ note.text }}</p>
      <p>{{ note.id }}</p>
    </div>

    <div class="note-card-buttons">
      <button id="show-read-modal" @click="showReadModal = true">Read</button>
      <button id="show-edit-modal" @click="showEditModal = true">Edit</button>
      <button id="show-delete-note" @click="showDeleteModal = true">Delete</button>
    </div>

    <modal v-if="showReadModal">
      <template v-slot:header>
        <h3>{{ note.title }}</h3>
      </template>
      <template v-slot:body>
        <div>
          <p>{{ note.text }}</p>
        </div>
        <div>
          <button @click="showReadModal = false">Close</button>
        </div>
      </template>
    </modal>

    <modal v-if="showEditModal">
      <template v-slot:header>
        <h3>Edit note</h3>
      </template>
      <template v-slot:body>
        <EditNote :note="note" @close="showEditModal = false"/>
      </template>
    </modal>

    <modal v-if="showDeleteModal">
      <template v-slot:header>
        <h3>Delete note</h3>
      </template>
      <template v-slot:body>
        <DeleteNote :note="note" @close="showDeleteModal = false"/>
      </template>
    </modal>
<!--    <div v-show="edited">-->
<!--      <form @submit.prevent="editNote(note.id)">-->
<!--        <h3>Note title:</h3>-->
<!--        <input-->
<!--            v-model="editedNoteTitle"-->
<!--            placeholder="Enter note title"-->
<!--        >-->

<!--        <h3>Note text:</h3>-->
<!--        <input-->
<!--            v-model="editedNoteText"-->
<!--            placeholder="Enter note text"-->
<!--        >-->

<!--        <button type="submit">Submit</button>-->
<!--      </form>-->
<!--    </div>-->
  </div>
</template>

<script>
// import {path} from "@/config";
// import {Request} from "@/config";
import Modal from "@/components/Modal";
import EditNote from "@/components/Modals/EditNote";
import DeleteNote from "@/components/Modals/DeleteNote";

export default {
  name: "Note",

  components: {
    Modal,
    DeleteNote,
    EditNote
  },

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
      showReadModal: false,
      showEditModal: false,
      showDeleteModal: false,
      // edited: false,
      // editedNoteTitle: null,
      // editedNoteText: null,

    }
  },

  // methods: {
  //   editButton(note) {
  //     this.edited = true;
  //     this.editedNoteTitle = note.title;
  //     this.editedNoteText = note.text;
  //   },
  //
  //   editNote(noteId) {
  //     let data = {
  //       note_id: noteId,
  //       new_note_title: this.editedNoteTitle,
  //       new_note_text: this.editedNoteText,
  //     }
  //     Request.putRequest(path.put, data)
  //     this.edited = false;
  //   },
  //
  //   deleteNote(noteId) {
  //     let data = {
  //       note_id: noteId,
  //     }
  //     Request.deleteRequest(path.delete, data)
  //   },
  // },
}
</script>

<style scoped>
.note-card {
  margin: 1%;
  min-width: 15vw;
  max-width: 20vw;
  min-height: 30vh;
  max-height: 40vh;
}
</style>