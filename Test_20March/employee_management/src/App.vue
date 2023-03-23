<template>
  <div id="app">
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from './components/EmployeeList.vue';

export default {
  name: 'App',
  components: {
    EmployeeList,
  },
};
</script>

<style>

body {
  font-family: Arial, sans-serif;
}
#app {
  background-color: #f5f5f5;
  padding: 20px;
}


ul {
  border: 1px solid #ccc;
  padding: 10px;
}


li {
  margin-bottom: 10px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}


li span {
  color: #666;
}


li:hover {
  background-color: #abddf0;
  cursor: pointer;
}

</style>
