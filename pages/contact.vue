<template>
  <div>
    <form>
      <dl>
        <dd><label for="subject">件名</label></dd>
        <dt>
          <input
            class="border-2 mb-9"
            id="subject"
            v-model="subject"
            name="subject"
            type="text"
          />
        </dt>
      </dl>
      <dl>
        <dd><label for="name">お名前</label></dd>
        <dt>
          <input
            class="border-2 mb-9"
            id="name"
            v-model="name"
            name="name"
            type="text"
          />
        </dt>
      </dl>
      <dl>
        <dd><label for="message">お問い合わせ内容</label></dd>
        <dt>
          <textarea
            class="border-4 mb-9"
            id="message"
            v-model="message"
            name="message"
          />
        </dt>
      </dl>
      <button
        class="border-4 p-2 border-gray-400"
        type="button"
        @click="handleSubmit"
      >
        送信する
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
const subject = ref();
const name = ref();
const message = ref();

async function handleSubmit() {
  await $fetch("https://testing-nuxt3.microcms.io/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": "FeWqlTlqu3vXjNmeNLvTaWssmEe0HwLOlW1X",
    },
    body: { subject: subject.value, name: name.value, message: message.value },
  });
}
</script>
