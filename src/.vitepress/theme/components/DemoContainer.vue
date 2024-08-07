<template>
  <div class="demo">
    <div class="demo-actions">
      <div class="demo-action" @click="toggle">&lt;/&gt;</div>
      <div class="demo-action">
        <a :href="sourceUrl" target="_blank">source</a>
      </div>
    </div>
    <slot></slot>
    <div v-show="expand">
      <slot name="sourceCode"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBoolean } from 'v3-use'

defineProps({
  sourceUrl: {
    type: String,
    default: ''
  }
})

const [expand, { toggle }] = useBoolean()
</script>

<style lang="scss">
.demo {
  font-size: var(--vt-doc-code-font-size);
  background: var(--vp-code-block-bg);
  padding: 2em;
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.5s;
  word-break: break-all;

  .demo-actions {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .demo-action {
      margin-left: 6px;
      font-size: 13px;
      color: var(--vp-c-text-2);
      cursor: pointer;
    }
  }

  .subtitle {
    margin-top: 10px;
    padding-top: 8px;
    font-size: 13px;
    color: var(--vp-c-text-2);
    border-top: 1px dashed var(--vp-c-text-3);
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }

  .loading {
    color: rgba(13, 157, 197, 0.798);
  }

  .vp-doc [class*='language-']::before {
    content: '';
  }

  pre[class*='language-'] {
    background-color: var(--vp-c-bg-mute) !important;
    border-radius: 4px;

    &::before {
      content: '';
    }

    [class~='language-javascript']:before {
      content: '';
    }
  }

  pre[class*='language-'] code {
    width: 100%;
    padding: 10px 20px;
    color: var(--vp-c-text-1);
  }
}

@media (min-width: 720px) {
  .demo {
    --width: calc(
      100vw - var(--sidebar-width) - var(--scrollbar-width)
    ) !important;
    --content-width: min(48rem, var(--width)) !important;
    --margin-left: calc(
      calc(calc(var(--content-width) - var(--width)) / 2) - 1.5rem
    ) !important;
  }
}

.demo {
  p {
    margin: 0.5rem 0;
  }

  button {
    padding: 3px 15px;
    background-color: var(--vp-c-brand);
    border: none;
    outline: none;
    color: white;
    margin: 0.5rem 0;
    border-bottom: 2px solid var(--vp-c-brand-dark);
    text-shadow: 1px 1px 1px var(--vp-c-brand-dark);
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    vertical-align: middle;
  }

  button.small {
    padding: 0.25em 0.7em 0.2em 0.7em;
  }

  button.orange {
    --vp-c-brand: #db8742;
    --vp-c-brand-dark: #ad6e39;
    --vp-c-brand-active: #d67e36;
  }

  button.red {
    --c-brand: #f56c6c;
    --c-brand-dark: #e41c1c;
    --c-brand-active: #e94c4c;
  }

  button:hover {
    background-color: var(--vp-c-brand-dark);
  }

  button:active {
    border-bottom: 0;
    border-top: 2px solid var(--vp-c-brand-dark);
  }

  button ~ button {
    margin-left: 0.5rem;
  }

  button[disabled],
  button.disabled {
    cursor: default;
    background-color: var(--vp-c-disabled-bg);
    color: var(--vp-c-disabled-fg);
    border-bottom: 2px solid var(--vp-c-disabled-bg);
    pointer-events: none;
    text-shadow: none;
    border-top: 0;
    opacity: 0.8;
  }

  textarea {
    display: block;
    min-width: 20rem;
    font-size: 1.05rem;
    padding: 0.5em 1em 0.4em 1em;
    border-radius: 4px;
    box-shadow: var(--vp-c-divider) 0px 0px 0px 1px;
    margin: 0.5rem 0;
    outline: none;
    background: var(--vp-c-bg);
    color: var(--vp-c-text);
    transition: background-color 0.5s;
  }

  textarea[readonly] {
    background: var(--vp-c-bg-light);
  }

  input[type='text'],
  input[type='search'],
  input[type='number'] {
    display: block;
    font-size: 0.9rem;
    padding: 0.5em 1em 0.4em 1em;
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 4px;
    outline: none;
    background: var(--vp-c-bg);
    color: var(--vp-c-text);
    min-width: 20rem;
    margin: 0.5rem 0;
  }

  input[type='number'] {
    min-width: 15rem;
    outline: none;
  }

  input:focus {
    border: 1px solid var(--vp-c-divider-dark-1);
  }

  pre,
  .code-block {
    opacity: 0.8;
    overflow: auto;
  }

  .code-block {
    background-color: var(--vp-c-bg-mute) !important;
    padding: 4px 8px;
    margin: 12px 0;
    border-radius: 4px;
  }

  .resizer {
    resize: both;
    padding: 1rem;
    width: 200px;
    height: 200px;
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 4px;
    background: white;
    outline: none;
    white-space: pre;
    overflow-wrap: normal;
    overflow: hidden;
    overflow-x: hidden;
  }

  .float {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem 2rem;
    border: 1px solid var(--vp-c-divider-light);
    background: var(--vp-c-bg);
    z-index: 100;
    min-width: 100px;
  }

  .area {
    border-width: 2px;
    border-style: dashed;
    padding: 1rem;
  }

  .error {
    color: #e41c1c;
  }
}

html.dark .demo {
  .resizer {
    background: #222;
    color: white;
  }
}
</style>
