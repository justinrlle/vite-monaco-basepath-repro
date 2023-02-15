<script setup>
import { nextTick, onMounted, onUnmounted, shallowRef, watch, ref } from 'vue';

import 'monaco-editor/esm/vs/editor/editor.all';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const el = ref(null);
const editor = shallowRef(null);

onMounted(() => {
  nextTick(async () => {
    const options = {
      value: JSON.stringify({foo: 'bar', baz: {hello: 'world', question: ['the', 'answer', {is: 42}]}}, null, 2),
      language: 'json',
      minimap: {
        enabled: false,
      },
      autoIndent: 'full',
      formatOnPaste: true,
      formatOnType: true,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      scrollbar: {
        verticalScrollbarSize: 12,
        alwaysConsumeMouseWheel: false,
      },
    };

    editor.value = monaco.editor.create(el.value, options);
  });
});
onUnmounted(() => {
  editor.value?.dispose();
});

</script>
<template>
  <div style="height: 80vh; width: 80vw;" ref="el"/>
</template>

