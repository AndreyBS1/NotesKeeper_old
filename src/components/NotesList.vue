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
import axios from "axios";
import {path} from "@/config";
// import {Request} from "@/config";

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
          .get(path.get)
          .then( (res) => {
            this.notes = res.data
          })
          .catch( (err) => {
            console.log(err)
          })
      console.log("GET")
      // this.notes = Request.getRequest(path.get);
      // console.log("\nNotes")
      // console.log(this.notes)
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