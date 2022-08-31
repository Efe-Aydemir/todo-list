<template>
    <div class="pt-10 text-white">
        <div class="flex justify-center items-center">
            <div class="flex flex-col gap-5">
                <div id="input">
                    <y-input @keyup.enter="click" id="todoİnput" v-model="inputvalue" class="text-white w-72 text-center" label="Todo İtem" info>
                    </y-input>
                </div>
                <div id="btns" class="flex justify-between">
                    <y-button secondary size="lg" @click="click">Add</y-button>
                    <y-button tertiary size="lg" @click="deletee">Delete All</y-button>
                </div>
                <div id="cardArea">
                    <MNCard :todos='todos'/>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue'
import MNCard from './MNCard.vue';
const inputvalue = ref('')
const todo = ref('')
const todos = ref([])
const todoId = ref(0)


function click() {
    if (inputvalue.value.length > 0) {
        todo.value = inputvalue.value
        todos.value.push(todo.value)
        inputvalue.value = ''
        localStorage.setItem(todoId.value, todos.value[todoId.value])
        todoId.value += 1
    }
}
function deletee() {
    todos.value = []
    inputvalue.value = ''
    localStorage.clear()
}

</script>


<style>
input {
    background-color: #3B3B3B;
    color: white;
}
</style>