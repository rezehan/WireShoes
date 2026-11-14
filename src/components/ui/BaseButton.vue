<script setup>
defineProps({
    type: { type: String, default: 'button' },
    // primary | outline
    variant: { type: String, default: 'primary' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
})

const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-300',
    outline: 'border-3 border-red-700 text-red-700 hover:bg-red-50 focus-visible:ring-red-200',
}
</script>

<template>
    <button :type="type" :disabled="disabled || loading" :aria-busy="loading" :class="[
        'inline-flex items-center justify-center gap-2 rounded-full px-9 py-3.5 font-semibold text-center transition',
        'focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-70',
        variants[variant],
        block ? 'w-full' : '',
    ]">
        <svg v-if="loading" class="size-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
        <slot />
    </button>
</template>