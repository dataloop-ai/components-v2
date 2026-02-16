<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DlButtonProps {
  /** The text label displayed inside the button */
  label?: string
  /** Visual variant of the button */
  variant?: 'filled' | 'outlined' | 'flat'
  /** Size of the button */
  size?: 'small' | 'medium' | 'large'
  /** Whether the button is disabled */
  disabled?: boolean
  /** Color theme */
  color?: 'primary' | 'secondary' | 'danger' | 'success'
}

const props = withDefaults(defineProps<DlButtonProps>(), {
  label: 'Button',
  variant: 'filled',
  size: 'medium',
  disabled: false,
  color: 'primary',
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => [
  'dl-button',
  `dl-button--${props.variant}`,
  `dl-button--${props.size}`,
  `dl-button--${props.color}`,
  { 'dl-button--disabled': props.disabled },
])
</script>

<style scoped>
.dl-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  outline: none;
}

/* Sizes */
.dl-button--small {
  padding: 4px 12px;
  font-size: 12px;
  height: 28px;
}
.dl-button--medium {
  padding: 6px 16px;
  font-size: 14px;
  height: 36px;
}
.dl-button--large {
  padding: 8px 24px;
  font-size: 16px;
  height: 44px;
}

/* Filled variants */
.dl-button--filled.dl-button--primary {
  background-color: #3452ff;
  color: #ffffff;
  border-color: #3452ff;
}
.dl-button--filled.dl-button--primary:hover:not(:disabled) {
  background-color: #2a42cc;
  border-color: #2a42cc;
}
.dl-button--filled.dl-button--secondary {
  background-color: #6b7280;
  color: #ffffff;
  border-color: #6b7280;
}
.dl-button--filled.dl-button--secondary:hover:not(:disabled) {
  background-color: #555b66;
  border-color: #555b66;
}
.dl-button--filled.dl-button--danger {
  background-color: #e53e3e;
  color: #ffffff;
  border-color: #e53e3e;
}
.dl-button--filled.dl-button--danger:hover:not(:disabled) {
  background-color: #c53030;
  border-color: #c53030;
}
.dl-button--filled.dl-button--success {
  background-color: #38a169;
  color: #ffffff;
  border-color: #38a169;
}
.dl-button--filled.dl-button--success:hover:not(:disabled) {
  background-color: #2f855a;
  border-color: #2f855a;
}

/* Outlined variants */
.dl-button--outlined {
  background-color: transparent;
}
.dl-button--outlined.dl-button--primary {
  color: #3452ff;
  border-color: #3452ff;
}
.dl-button--outlined.dl-button--primary:hover:not(:disabled) {
  background-color: rgba(52, 82, 255, 0.08);
}
.dl-button--outlined.dl-button--secondary {
  color: #6b7280;
  border-color: #6b7280;
}
.dl-button--outlined.dl-button--danger {
  color: #e53e3e;
  border-color: #e53e3e;
}
.dl-button--outlined.dl-button--success {
  color: #38a169;
  border-color: #38a169;
}

/* Flat variants */
.dl-button--flat {
  background-color: transparent;
  border-color: transparent;
}
.dl-button--flat.dl-button--primary {
  color: #3452ff;
}
.dl-button--flat.dl-button--primary:hover:not(:disabled) {
  background-color: rgba(52, 82, 255, 0.08);
}
.dl-button--flat.dl-button--secondary {
  color: #6b7280;
}
.dl-button--flat.dl-button--danger {
  color: #e53e3e;
}
.dl-button--flat.dl-button--success {
  color: #38a169;
}

/* Disabled */
.dl-button--disabled,
.dl-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
