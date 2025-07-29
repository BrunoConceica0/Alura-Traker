<template>
  <div class="notification-container">
    <transition-group name="slide" tag="div">
      <article
        v-for="notification in notifications"
        :key="notification.id"
        :class="['notification', context[notification.type as typeNotification]]"
      >
        <div class="notification-title">{{ notification.title }}</div>
        <div class="notification-text">{{ notification.text }}</div>
      </article>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "../store";
import { typeNotification } from "../interfaces/INotificationMessage";

export default defineComponent({
  name: "Notification",
  setup() {
    const store = useStore();

    const context = {
      [typeNotification.SUCCESS]: "notification-success",
      [typeNotification.ATTENTION]: "notification-warning",
      [typeNotification.FAILURE]: "notification-error",
    };

    const notifications = computed(() => store.state.notification);

    return { notifications, context };
  },
});
</script>

<style scoped>
/* Transições */
.slide-enter-active {
  animation: slide-in 0.4s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.4s ease-in forwards;
}

/* Keyframes */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
