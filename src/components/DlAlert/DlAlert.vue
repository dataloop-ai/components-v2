<template>
  <div v-if="visible" :class="classes" role="alert">
    <span class="dl-alert__icon">{{ icon }}</span>
    <div class="dl-alert__content">
      <strong v-if="title" class="dl-alert__title">{{ title }}</strong>
      <span class="dl-alert__message">
        <slot>{{ message }}</slot>
      </span>
    </div>
    <button
      v-if="closable"
      class="dl-alert__close"
      aria-label="Close"
      @click="handleClose"
    >
      &times;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface DlAlertProps {
  /** The type/severity of the alert */
  type?: 'success' | 'warning' | 'error' | 'info'
  /** Optional title displayed above the message */
  title?: string
  /** The alert message text */
  message?: string
  /** Whether the alert can be closed */
  closable?: boolean
}

const props = withDefaults(defineProps<DlAlertProps>(), {
  type: 'info',
  title: '',
  message: '',
  closable: false,
})

const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)

const icon = computed(() => {
  const icons: Record<string, string> = {
    success: '\u2713',
    warning: '\u26A0',
    error: '\u2717',
    info: '\u2139',
  }
  return icons[props.type] || icons.info
})

const classes = computed(() => [
  'dl-alert',
  `dl-alert--${props.type}`,
])

function handleClose() {
  visible.value = false
  emit('close')
}
</script>

<style scoped>
.dl-alert {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid;
  gap: 10px;
}

.dl-alert--info {
  background-color: #ebf5ff;
  border-color: #3452ff;
  color: #1e3a5f;
}
.dl-alert--success {
  background-color: #f0fff4;
  border-color: #38a169;
  color: #22543d;
}
.dl-alert--warning {
  background-color: #fffaf0;
  border-color: #dd6b20;
  color: #7b341e;
}
.dl-alert--error {
  background-color: #fff5f5;
  border-color: #e53e3e;
  color: #742a2a;
}

.dl-alert__icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

.dl-alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dl-alert__title {
  font-weight: 600;
  font-size: 14px;
}

.dl-alert__message {
  font-size: 13px;
}

.dl-alert__close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
}
.dl-alert__close:hover {
  opacity: 1;
}
</style>
