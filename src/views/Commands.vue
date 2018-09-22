<template>
  <div id="commands">
    <hr>
    <h1>The default prefix is $</h1>
    <small id="com-exp">Use commands with multiple options with a space in between: $key add</small>
    <hr>
    <div class="wrapper">
      <div class="col-1">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsMainOne" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

          </ul>
        </div>
      <div class="col-2">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsMainTwo" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div> <!-- Wrapper -->
    <hr>
    <h3>Notifiers</h3>
    <hr>
    <div class="wrapper">
      <div class="col-1">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsNotifiersOne" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="col-2">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsNotifiersTwo" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div> <!-- Wrapper -->
    <hr>
    <h3>Meta & Stats</h3>
    <hr>
    <div class="wrapper">
      <div class="col-1">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsMetaOne" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="col-2">
        <ul class="list-group">

          <li class="list-group-item border" v-for="command in commandsMetaTwo" :key="command.id">
            <div v-if="!command.args">
              <h3>{{ command.name }}</h3>
              <small>{{ command.desc }}</small>
            </div>
            <div v-else>
              <button @click="toggleActive($event, command)" :class="{active: command.active}">
                {{ command.name }}
              </button>
              <small>{{ command.desc }}</small>
              <div class="args" v-show="command.active" v-for="(argDesc, argName,) in command.args"
              :key="argName.id">
                <hr>
                <p>{{ argName }}</p>
                <small>{{ argDesc }}</small>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script src="@/commandsdata.js" scoped>
</script>
