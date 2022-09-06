<template>
  <div>
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header bordered class="bg-grey-1">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            color="black"
          />
          <q-toolbar-title class="text-black">Креатив</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>Головна </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="piano" />
              </q-item-section>
              <q-item-section>Програми </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="image" />
              </q-item-section>
              <q-item-section>Галерея </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="question_answer" />
              </q-item-section>
              <q-item-section>Відгуки </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Rostyk Urdeichuk</div>
            <div>stk1er7790@gmail.com</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <!-- <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page> -->
        <slot></slot>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
drawer: false;

export default {
  name: "AdminLayout",

  data() {
    return {
      drawer: false,
    };
  },
};
</script>
