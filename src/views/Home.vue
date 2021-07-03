<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
  </modal>

  <NotesList/>
  <AddNote/>
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