<template>
  <div class="commands">
    <!-- <hr> -->
    <h1>The default prefix is $</h1>
    <small class="com-exp">Use commands with multiple options with a space in between: $key add</small>
    <!-- <hr> -->
    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in general" :key="command.id" class="list-group-item border">
          <div v-if="!command.args">
            <h3>{{ command.name }}</h3>
            <small>{{ command.desc }}</small>
          </div>

          <div v-else>
            <h3
              class="button"
              :class="{active: command.active}"
              @click="toggleActive($event, command)"
            >
              {{ command.name }}
            </h3>
            <small>{{ command.desc }}</small>
            <div
              v-for="(argDesc, argName,) in command.args"
              v-show="command.active"
              :key="argName.id"
              class="args"
            >
              <hr>
              <p>{{ argName }}</p>
              <small>{{ argDesc }}</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Wrapper -->
    <hr>
    <h3>Notifiers</h3>
    <hr>
    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in notifiers" :key="command.id" class="list-group-item border">
          <div v-if="!command.args">
            <h3>{{ command.name }}</h3>
            <small>{{ command.desc }}</small>
          </div>

          <div v-else>
            <h3
              class="button"
              :class="{active: command.active}"
              @click="toggleActive($event, command)"
            >
              {{ command.name }}
            </h3>
            <small>{{ command.desc }}</small>
            <div
              v-for="(argDesc, argName,) in command.args"
              v-show="command.active"
              :key="argName.id"
              class="args"
            >
              <hr>
              <p>{{ argName }}</p>
              <small>{{ argDesc }}</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Wrapper -->
    <hr>
    <h3>Meta & Stats</h3>
    <hr>
    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in meta" :key="command.id" class="list-group-item border">
          <div v-if="!command.args">
            <h3>{{ command.name }}</h3>
            <small>{{ command.desc }}</small>
          </div>

          <div v-else>
            <h3
              class="button"
              :class="{active: command.active}"
              @click="toggleActive($event, command)"
            >
              {{ command.name }}
            </h3>
            <small>{{ command.desc }}</small>
            <div
              v-for="(argDesc, argName,) in command.args"
              v-show="command.active"
              :key="argName.id"
              class="args"
            >
              <hr>
              <p>{{ argName }}</p>
              <small>{{ argDesc }}</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import '../assets/config';

h3,
h3.button {
  display: inline-block;
  font-size: 1.5em;
  padding: 0.4rem 1rem;
  margin: auto;
  margin-bottom: 1rem;
}

h3 {
  border: 1px solid transparent;
  font-family: "Raleway", sans-serif;
}

h3.button {
  cursor: pointer;
  border: 1px solid #343a40;
  border-radius: 0.3rem;
  background-color: $secondaryColor;
  transition: all 0.15s ease-in-out;

  &.active,
  &:hover {
    background-color: #343a40;
    color: white;
    cursor: pointer;
  }
}
</style>

<script src="@/static/commandsData.js" scoped>
</script>
