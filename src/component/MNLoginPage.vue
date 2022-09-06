<template>
    <h1 class="text-2xl pt-10 text-white text-center">MN Todo List</h1>
    <div class="flex justify-center pt-20 items-center">
        <div class="flex flex-col h-96 w-72 bg-gray-800 rounded-md">
            <div id="username" class="flex flex-col gap-5 pt-5 text-center">
                <label class="text-xl text-white">Gmail</label>
                <input type="text" v-model="gmail" name="gmail" id="gmail"
                    class="w-full h-12 border-l-8 border-r-8 transition-all duration-500 bg-black outline-none text-white p-4"
                    :class="namecls" required>
            </div>
            <div id="password" class="flex flex-col gap-5 pt-5 text-center">
                <label class="text-xl text-white">Password</label>
                <input type="password" v-model="nameIn2" name="name" id="name2"
                    class="w-full h-12 border-l-8 border-r-8 transition-all duration-500 bg-black outline-none text-white p-4"
                    :class="namecls2" required>
            </div>
            <button
                class="border-2 border-white transition-all duration-300 rounded-md text-white hover:bg-black hover:border-opacity-0 w-full mt-20 p-3 bg-transparent"
                @click="login">Log in</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { createUserWithEmailAndPassword , getAuth} from 'firebase/auth'
import router from '@/router'

const gmail = ref('')
const namecls = ref('border-red-600')
const nameIn2 = ref('')
const namecls2 = ref('border-red-600')
const auth = getAuth()

watch(gmail, () => {
    if (gmail.value.length > 0) {
        namecls.value = 'border-green-600'
    } else {
        namecls.value = 'border-red-600'
    }
})

watch(nameIn2, () => {
    if (nameIn2.value.length > 0) {
        namecls2.value = 'border-green-600'
    } else {
        namecls2.value = 'border-red-600'
    }
})



function login() {
    if (gmail.value.length <= 0 && nameIn2.value.length <= 0) {
        alert('Lütfen Gerekli Yerleri Doldurunuz')
    } else if (gmail.value.length >= 0 && nameIn2.value.length >= 0) {
        localStorage.setItem('gmail', gmail.value)
        localStorage.setItem('passw', nameIn2.value)
        createUserWithEmailAndPassword(auth , gmail.value, nameIn2.value)
            .then(() => {
                router.push('/todo')
            })
            .catch(error => {
                alert(error)
            })


        gmail.value = ""
        nameIn2.value = ""
    } else {
        window.location.reload()
    }
}

</script>
