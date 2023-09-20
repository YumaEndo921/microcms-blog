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
      <p>{{ errors }}</p>
      <button
        class="border-4 p-2 border-gray-400"
        type="button"
        @click="handleSubmit"
      >
        送信する
      </button>
      <NuxtLink to="/">
        <button class="border-4 p-2 border-gray-400 mt-10 ml-8" type="button">
          戻る
        </button>
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
const subject = ref();
const name = ref();
const message = ref();
const errors = ref();

async function handleSubmit() {
  const { error, status } = await useFetch("/api/test", {
    method: "post",
    body: {
      subject: subject.value,
      name: name.value,
      message: message.value,
    },
  });
  if (status.value === "error") {
    console.log("エラー");
    errors.value = error.value;
  } else {
    console.log("test成功");
    errors.value = "送信成功";
    subject.value = "";
    name.value = "";
    message.value = "";
  }
}
</script>
