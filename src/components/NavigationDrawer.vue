<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg/250px-2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg"
        subtitle="danielfink2001@mail.ru"
        title="Fink Daniel"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" to="/" title="Home"></v-list-item>
      <v-list-item
        prepend-icon="mdi-file-document"
        to="/about"
        title="Testing ground RN"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-check"
        to="/taskManager"
        title="Task Manager"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-gamepad-variant"
        to="/azazGame"
        title="Azaz Game"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
