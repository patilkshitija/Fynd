<template>
  <div>
    <h1>Employee Management</h1>
    
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        {{ employee.name }} ({{ employee.position }})
      </li>
    </ul>
    <form @submit.prevent="addEmployee">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newEmployee.name" required>
      <label for="position">Position:</label>
      <input type="text" id="position" v-model="newEmployee.position" required>
      <button type="submit">Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { id: 1, name: 'Kshitija Patil', position: 'Manager' },
        { id: 2, name: 'Sakshi Wathare', position: 'Developer' },
        { id: 3, name: 'Anuradha Patil', position: 'Designer' },
      ],
      newEmployee: { name: '', position: '' },
    };
  },
  methods: {
    addEmployee() {
      const id = this.employees.length + 1;
      this.employees.push({ ...this.newEmployee, id });
      this.newEmployee = { name: '', position: '' };
    },
  },
};

</script>

<style>

ul {
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

li span {
  color: #333;
  font-weight: bold;
}
/* li span:nth-child(2) {
  color: #666;
} */
li:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
h1 {
  margin-top: 0;
  padding-top: 10px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  border: 5px solid #ccc;
  
}
</style>
