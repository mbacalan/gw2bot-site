<template>
  <div class="commands">
    <h1>The default prefix is $</h1>
    <small class="com-exp">Use commands with multiple options with a space in between: $key add</small>

    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in general" :key="command.id" class="list-group-item">
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

            <div class="args" :class="{active: command.active}">
              <div
                v-for="(argDesc, argName,) in command.args"
                v-show="command.active"
                :key="argName.id"
                class="args__item"
              >
                <h4 class="args__item--title">
                  {{ argName }}
                </h4>
                <small class="args__item--desc">{{ argDesc }}</small>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Wrapper -->
    <h3 class="titles">
      Notifiers
    </h3>
    <hr>
    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in notifiers" :key="command.id" class="list-group-item">
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

            <div class="args" :class="{active: command.active}">
              <div
                v-for="(argDesc, argName,) in command.args"
                v-show="command.active"
                :key="argName.id"
                class="args__item"
              >
                <h4 class="args__item--title">
                  {{ argName }}
                </h4>
                <small class="args__item--desc">{{ argDesc }}</small>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Wrapper -->
    <hr>
    <h3 class="titles">
      Meta & Stats
    </h3>
    <hr>
    <div class="wrapper">
      <ul class="list-group">
        <li v-for="command in meta" :key="command.id" class="list-group-item">
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

            <div class="args" :class="{active: command.active}">
              <div
                v-for="(argDesc, argName,) in command.args"
                v-show="command.active"
                :key="argName.id"
                class="args__item"
              >
                <h4 class="args__item--title">
                  {{ argName }}
                </h4>
                <small class="args__item--desc">{{ argDesc }}</small>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/config";

.args {
  position: absolute;
  left: 50%;
  top: 80px;
  opacity: 0;
  transform: translate(-50%);
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  transition: opacity 0.2s;
  z-index: 1000;

  &.active {
    opacity: 1;
  }

  &__item {
    position: relative;
    padding: 10px;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 1px;
      width: 50%;
      transform: translate(-50%);
      background-color: darken($primaryColor, 5);
    }

    &--title,
    &--desc {
      color: darken($primaryColor, 5);
    }

    &--title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    &:last-child {
      padding-bottom: 15px;

      &:after {
        content: none;
      }
    }
  }
}

h3,
h3.button {
  display: inline-block;
  font-size: 1.5em;
  padding: 0.4rem 1rem;
  margin: auto;
  margin-bottom: 1rem;
}

li {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 2px;
    width: 180px;
    left: 50%;
    transform: translateX(-50%);
    background-color: darken($primaryColor, 5);
  }
}

h3 {
  border: 1px solid transparent;
  font-family: "Raleway", sans-serif;
}

h3.button {
  cursor: pointer;
  border: 1px solid $primaryColor;
  border-radius: 0.3rem;
  background-color: darken($primaryColor, 5);
  transition: all 0.15s ease-in-out;

  &:before {
    content: "↓";
  }

  &.active,
  &:hover {
    background-color: lighten($primaryColor, 5);
    color: $tertiaryColor;
    cursor: pointer;
  }
}

@media (min-width: 1024px) {
  .args {
    width: 50%;
  }
}
</style>

<script src="@/static/commandsData.js" scoped>
export default {
  name: 'CommandsPage'
}
</script>
