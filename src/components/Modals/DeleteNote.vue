<template>
  <div>
    <h4>Are you sure?</h4>
  </div>

  <div>
    <button @click="deleteNote">Yes</button>
    <button @click="$emit('close')">No</button>
  </div>
</template>

<script>
import {path, Request} from "@/config";

export default {
  name: "DeleteNote",

  props: {
    note: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  methods: {
    deleteNote() {
      let data = {
        note_id: this.note.id,
      };
      Request.deleteRequest(path.delete, data);
      this.$emit('close');
    },
  }
}
</script>

<style scoped>

</style>