<template>
  <button id="show-modal" @click="showModal = true">
    Create Note
  </button>

  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>Create note</h3>
    </template>
    <template v-slot:body>
      <AddNote @close="showModal = false"/>
    </template>
  </modal>

  <NotesList/>
<!--  <AddNote/>-->
</template>

<script>
import NotesList from "@/components/NotesList";
import AddNote from "@/components/AddNote";
import Modal from "@/components/Modal";

export default {
  name: "Home",
  components: {
    Modal,
    NotesList,
    AddNote
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style scoped>

</style>