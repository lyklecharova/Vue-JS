<template>
    <div>
        <h1>{{ name }}</h1>
        <p v-if="status === 'active'">User is active</p>
        <p v-else-if="status === 'pending'">User is pending</p>
        <p v-else>User is inactive</p>

        <form @submit.prevent="addTask">
            <label for="newTask">Add Task</label>
            <input 
                type="text" 
                name="newTask" 
                id="newTask" 
                v-model="newTask"
            />
            <button type="submit">Submit</button>
        </form>
        <h3>Tasks:</h3>
        <ul>
            <li v-for="task in tasks" :key="task">{{ task }}</li>
        </ul>
        <br />
        <button @click="toggleStatus">Change Status</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const newTask = ref("");

const toggleStatus = () => {
    if (status.value == "active") {
        status.value = "pending";
    } else if (status.value === "pending") {
        status.value = "inactive";
    } else {
        status.value = "active";
    }
};
const addTask = () =>{
    if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
        newTask.value = '';
    }
}
</script>
