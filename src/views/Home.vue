<template>
  <button id="show-create-modal" @click="showCreateModal = true">
    Create Note
  </button>

  <modal v-if="showCreateModal">
    <template v-slot:header>
      <h3>Create note</h3>
    </template>
    <template v-slot:body>
      <CreateNote @close="showCreateModal = false"/>
    </template>
  </modal>

  <NotesList/>
</template>

<script>
import NotesList from "@/components/NotesList";
import CreateNote from "@/components/Modals/CreateNote";
import Modal from "@/components/Modal";

export default {
  name: "Home",
  components: {
    Modal,
    NotesList,
    CreateNote,
  },
  data() {
    return {
      showCreateModal: false,
    }
  }
}
</script>

<style scoped>

</style>