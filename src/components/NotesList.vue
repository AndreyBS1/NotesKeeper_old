<template>
  <div class="notes-list">
    <Note
        v-for="note in notes"
        :note="note"
        :key='note.id'
        @update="getNotes"
    />
  </div>
</template>

<script>
import Note from "./Note";
import {path} from "@/config";
import {Request} from "@/config";

export default {
  name: "NotesList",

  // mixins: [mixin]

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