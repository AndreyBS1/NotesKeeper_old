<template>
  <div class="note-card">
    <div class="note-card-body">
      <h3>{{ note.title }}</h3>
      <p>{{ note.text }}</p>
      <p>{{ note.id }}</p>
    </div>

    <div class="note-card-buttons">
      <button class="show-read-modal" @click="showReadModal = true">Read</button>
      <button class="show-edit-modal" @click="showEditModal = true">Edit</button>
      <button class="show-delete-note" @click="showDeleteModal = true">Delete</button>
    </div>
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
        <EditNote
            :note="note"
            @close-edit-modal="showEditModal = false"
            @edited-note="$emit('update')"
        />
      </template>
    </modal>

    <modal v-if="showDeleteModal">
      <template v-slot:header>
        <h3>Delete note</h3>
      </template>
      <template v-slot:body>
        <DeleteNote
            :note="note"
            @close-delete-modal="showDeleteModal = false"
            @deleted-note="$emit('update')"
        />
      </template>
    </modal>
</template>

<script>
import Modal from "@/components/Modal";
import EditNote from "@/components/Modals/EditNote";
import DeleteNote from "@/components/Modals/DeleteNote";

export default {
  name: "Note",

  emits: ['update'],

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
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.note-card {
  width: 300px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #F5F5F5;
  background: white;
  transition: .2s ease-in;
}

.note-card:hover {
  border: 2px solid #9370DB;
}

.note-card-body{
  height: 200px;
}

.note-card-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}

button {
  text-decoration: none;
  display: inline-block;
  margin: 0 12px;
  padding: 0 12px;
  background: white;
  border: 2px solid #F5F5F5;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: .2s ease-in;
}

.show-read-modal:hover {
  border: 2px solid #4169E1;
}

.show-edit-modal:hover {
  border: 2px solid #808080;
}

.show-delete-note:hover {
  border: 2px solid #fc5a5a;
}
</style>