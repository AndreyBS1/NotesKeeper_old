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
import axios from 'axios';

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
    getNotes() {
      axios
          .get('http://127.0.0.1:5000/')
          .then((res) => {
            this.notes = res.data
            console.log(this.notes)
          })
          .catch((err) => {
            console.log(err);
          })
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