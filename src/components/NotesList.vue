<template>
  <div class="notes-list">
    <Note
        v-for="note in notes"
        :note="note"
        :key='note.id'
        @update="getNotes"
    />
  </div>
  <div>
    <button id="show-create-modal" @click="showCreateModal = true">
      Create Note
    </button>

    <modal v-if="showCreateModal">
      <template v-slot:header>
        <h3>Create note</h3>
      </template>
      <template v-slot:body>
        <CreateNote
            @close-create-modal="showCreateModal = false"
            @created-note="getNotes"
        />
      </template>
    </modal>
  </div>
</template>

<script>
import Note from "./Note";
import {path} from "@/config";
import {Request} from "@/config";
import CreateNote from "@/components/Modals/CreateNote";
import Modal from "@/components/Modal";

export default {
  name: "NotesList",

  components: {
    Note,
    CreateNote,
    Modal,
  },

  data() {
    return {
      showCreateModal: false,
      notes: [],
    }
  },

  methods: {
    async getNotes() {
      this.notes = await Request.getRequest(path.get);
      console.log("Displayed data:");
      console.log(this.notes);
    }
  },

  async mounted() {
    await this.getNotes();
  },
}
</script>

<style scoped>
.notes-list {
  display: flex;
  justify-content: center;
}
</style>