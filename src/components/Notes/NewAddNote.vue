<template lang="">
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white" for="">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          id="tar"
          :value="modelValue"
          class="textarea"
          :placeholder="placeholder"
          v-autofocus
          maxlength="80"
          ref="textareaRef"
          @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus';


const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Add a new notes'
  },
  label: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextArea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextArea
});
</script>
