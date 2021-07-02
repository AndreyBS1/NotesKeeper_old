<template>
  <div class="notes-list">
    <Note
        v-for="note in notes"
        :note="note"
        :key='note.id'
    >
    </Note>
  </div>
</template>

<script>
import Note from "./Note";
import {path} from "@/config";
import {Request} from "@/config";

export default {
  name: "NotesList",
  components: {
    Note
  },
  data() {
    return {
      loading: true,
      notes: [],
    }
  },
  methods: {
    async getNotes() {
      this.notes = await Request.getRequest(path.get);
      console.log("\nNotes")
      console.log(this.notes)
    }
  },
  async mounted() {
    await this.getNotes()
  },
}
</script>

<style scoped>
.notes-list {
  display: flex;
  justify-content: center;
}
</style>