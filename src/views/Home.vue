<template>
  <NotesList/>
  <AddNote/>
</template>

<script>
import NotesList from "@/components/NotesList";
import AddNote from "@/components/AddNote";

export default {
  name: "Home",
  components: {
    NotesList,
    AddNote
  },
}
</script>

<style scoped>

</style>