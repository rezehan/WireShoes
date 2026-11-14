<script setup>
defineProps({
    // error | success
    variant: { type: String, default: 'error' },
})

const variants = {
    error: 'border-red-200 bg-red-50 text-red-800',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
}
</script>

<template>
    <div :role="variant === 'error' ? 'alert' : 'status'"
        :class="['rounded-2xl border px-5 py-3.5 text-sm font-medium', variants[variant]]">
        <slot />
    </div>
</template>