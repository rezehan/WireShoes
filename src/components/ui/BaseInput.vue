<script>
// Counter di luar <script setup> supaya id unik antar instance
let counter = 0
</script>

<script setup>
import { computed, ref } from 'vue'

// Atribut dari luar (mis. onBlur/onChange dari vee-validate) diteruskan ke <input>, bukan ke div pembungkus
defineOptions({ inheritAttrs: false })

const props = defineProps({
    label: { type: String, required: true },
    // text | email | password | textarea
    type: { type: String, default: 'text' },
    name: { type: String, default: undefined },
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    rows: { type: Number, default: 3 },
    hint: { type: String, default: '' },
    error: { type: String, default: '' },
})

const model = defineModel({ type: String, default: '' })

const uid = `base-input-${++counter}`
const showPassword = ref(false)

const isPassword = computed(() => props.type === 'password')
const isTextarea = computed(() => props.type === 'textarea')
const inputType = computed(() => (isPassword.value && showPassword.value ? 'text' : props.type))
const describedBy = computed(() => {
    if (props.error) return `${uid}-error`
    if (props.hint) return `${uid}-hint`
    return undefined
})

const fieldClass = computed(() => [
    'w-full rounded-2xl border bg-white px-5 py-3.5 text-slate-700 placeholder:text-slate-400',
    'transition outline-none focus:ring-4',
    props.error
        ? 'border-red-600 bg-red-50 focus:border-red-700 focus:ring-red-200'
        : 'border-slate-300 focus:border-red-700 focus:ring-red-100',
    isPassword.value ? 'pr-14' : '',
    isTextarea.value ? 'resize-none' : '',
])
</script>

<template>
    <div>
        <label :for="uid" class="block mb-2 text-sm font-semibold text-slate-700">
            {{ label }}
        </label>

        <div class="relative">
            <textarea v-if="isTextarea" :id="uid" v-model="model" :name="name" :rows="rows" :placeholder="placeholder"
                :autocomplete="autocomplete" :aria-invalid="!!error" :aria-describedby="describedBy"
                :class="fieldClass" v-bind="$attrs" />

            <input v-else :id="uid" v-model="model" :type="inputType" :name="name" :placeholder="placeholder"
                :autocomplete="autocomplete" :aria-invalid="!!error" :aria-describedby="describedBy"
                :class="fieldClass" v-bind="$attrs">

            <button v-if="isPassword" type="button"
                class="absolute inset-y-0 right-0 flex items-center px-4 rounded-r-2xl text-slate-400 transition hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
                :aria-label="showPassword ? 'Sembunyikan password' : 'Tampilkan password'"
                :aria-pressed="showPassword" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="size-5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </button>
        </div>

        <p v-if="error" :id="`${uid}-error`" class="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
                stroke="currentColor" class="size-4 mt-0.5 shrink-0" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>{{ error }}</span>
        </p>
        <p v-else-if="hint" :id="`${uid}-hint`" class="mt-2 text-sm text-slate-400">{{ hint }}</p>
    </div>
</template>