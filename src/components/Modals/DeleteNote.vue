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

  emits: ['closeDeleteModal', 'deletedNote'],

  props: {
    note: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  methods: {
    async deleteNote() {
      let data = {
        note_id: this.note.id,
      };
      await Request.deleteRequest(path.delete, data);
      this.$emit('closeDeleteModal');
      this.$emit('deletedNote');
    },
  }
}
</script>

<style scoped>

</style>