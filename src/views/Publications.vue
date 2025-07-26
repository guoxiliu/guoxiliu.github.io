<script>
export default {
  name: 'Publications'
}
</script>

<template>
  <div class="container">
    <div class="publications">
      <h1>Publications</h1>
      <p>Here you can find a list of my publications.</p>
      <ul>
        <li>
          <strong>Title of Publication 1</strong> - <em>Journal Name</em> (Year)
        </li>
        <li>
          <strong>Title of Publication 2</strong> - <em>Journal Name</em> (Year)
        </li>
        <li>
          <strong>Title of Publication 3</strong> - <em>Journal Name</em> (Year)
        </li>
        <!-- Add more publications as needed -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.publications {
  margin-top: 20px;
}
.publications h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
.publications ul {
  list-style-type: none;
  padding: 0;
}
.publications li {
  margin-bottom: 10px;
}
</style>