<template>
  <span :class="classes">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DlBadgeProps {
  /** The text displayed in the badge */
  label?: string
  /** Color variant of the badge */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  /** Size of the badge */
  size?: 'small' | 'medium' | 'large'
  /** Whether the badge has a filled or outlined style */
  variant?: 'filled' | 'outlined'
}

const props = withDefaults(defineProps<DlBadgeProps>(), {
  label: 'Badge',
  color: 'primary',
  size: 'medium',
  variant: 'filled',
})

const classes = computed(() => [
  'dl-badge',
  `dl-badge--${props.color}`,
  `dl-badge--${props.size}`,
  `dl-badge--${props.variant}`,
])
</script>

<style scoped>
.dl-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  border: 1px solid transparent;
}

/* Sizes */
.dl-badge--small {
  padding: 1px 8px;
  font-size: 10px;
  height: 18px;
}
.dl-badge--medium {
  padding: 2px 10px;
  font-size: 12px;
  height: 22px;
}
.dl-badge--large {
  padding: 3px 14px;
  font-size: 14px;
  height: 28px;
}

/* Filled variants */
.dl-badge--filled.dl-badge--primary {
  background-color: #3452ff;
  color: #ffffff;
}
.dl-badge--filled.dl-badge--secondary {
  background-color: #6b7280;
  color: #ffffff;
}
.dl-badge--filled.dl-badge--success {
  background-color: #38a169;
  color: #ffffff;
}
.dl-badge--filled.dl-badge--warning {
  background-color: #dd6b20;
  color: #ffffff;
}
.dl-badge--filled.dl-badge--danger {
  background-color: #e53e3e;
  color: #ffffff;
}
.dl-badge--filled.dl-badge--info {
  background-color: #3182ce;
  color: #ffffff;
}

/* Outlined variants */
.dl-badge--outlined.dl-badge--primary {
  background-color: transparent;
  color: #3452ff;
  border-color: #3452ff;
}
.dl-badge--outlined.dl-badge--secondary {
  background-color: transparent;
  color: #6b7280;
  border-color: #6b7280;
}
.dl-badge--outlined.dl-badge--success {
  background-color: transparent;
  color: #38a169;
  border-color: #38a169;
}
.dl-badge--outlined.dl-badge--warning {
  background-color: transparent;
  color: #dd6b20;
  border-color: #dd6b20;
}
.dl-badge--outlined.dl-badge--danger {
  background-color: transparent;
  color: #e53e3e;
  border-color: #e53e3e;
}
.dl-badge--outlined.dl-badge--info {
  background-color: transparent;
  color: #3182ce;
  border-color: #3182ce;
}
</style>
