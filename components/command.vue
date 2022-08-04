<template>
  <li class="command">
    <div v-if="command.args" :id="command.name+'-tooltip'" class="tooltip" :class="{active: command.active}">
      <button
        class="tooltip__close"
        :aria-controls="command.name+'-tooltip'"
        title="Close"
        @click="hideTooltip(command)"
      />
      <CommandArgumentsComponent :command="command" />
    </div>

    <h3 class="command__name">
      <template v-if="!command.subcommands">
        <span>{{ command.name }}</span>
        <button
          v-if="command.args"
          class="args-button"
          :class="{active: command.active}"
          :aria-controls="command.name+'-tooltip'"
          :aria-expanded="command.active?'true':'false'"
          :title="command.active?'Hide command arguments':'Show command arguments'"
          @click="toggleActive(command)"
        >
          {{ '+'+command.args.length }}
        </button>
      </template>
      <template v-else-if="command.subcommands">
        <button
          class="command-button"
          :class="{active: command.active}"
          :aria-controls="command.name+'-subcommands'"
          :aria-expanded="command.active?'true':'false'"
          :title="command.active?'Hide subcommands':'Show subcommands'"
          @click="toggleActive(command)"
        >
          <span>{{ command.name }}</span>
        </button>
      </template>
    </h3>
    <p class="command__desc">
      {{ command.desc | twoOrphans }}
    </p>

    <div v-if="command.permissions" class="permissions">
      <p class="small-text">
        {{ "Required API key permission"+(command.permissions.length>1?'s:':':') }}<br>
        <code v-for="(permission, index) in command.permissions" :key="`permission-${index}`" class="smaller">{{ permission }}</code>
      </p>
    </div>

    <ul v-if="command.subcommands" v-show="command.active" :id="command.name+'-subcommands'" class="subcommand-list">
      <li v-for="(subcommand, index) in command.subcommands" :key="`subcommand-${index}`" class="subcommand">
        <div v-if="subcommand.args" :id="command.name+'-'+subcommand.name+'-tooltip'" class="tooltip" :class="{active: subcommand.active}">
          <button
            class="tooltip__close"
            :aria-controls="command.name+'-'+subcommand.name+'-tooltip'"
            title="Close"
            @click="hideTooltip(subcommand)"
          />
          <CommandArgumentsComponent :command="subcommand" />
        </div>

        <p class="subcommand__name">
          <span>{{ command.name }}</span> {{ subcommand.name }}
          <button
            v-if="subcommand.args"
            class="args-button"
            :class="{active: subcommand.active}"
            :aria-controls="command.name+'-'+subcommand.name+'-tooltip'"
            :aria-expanded="subcommand.active?'true':'false'"
            :title="subcommand.active?'Hide command arguments':'Show command arguments'"
            @click="toggleActive(subcommand)"
          >
            {{ '+'+subcommand.args.length }}
          </button>
        </p>
        <p class="subcommand__desc small-text">
          {{ subcommand.desc | twoOrphans }}
        </p>

        <div v-if="subcommand.permissions" class="permissions">
          <p class="small-text">
            {{ "Required API key permission"+(subcommand.permissions.length>1?'s:':':') }}<br>
            <code v-for="(permission, index2) in subcommand.permissions" :key="`permission-${index2}`" class="smaller">{{ permission }}</code>
          </p>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
import Vue from 'vue'
import CommandArgumentsComponent from '@/components/command-arguments'

export default {
  name: 'CommandComponent',
  components: {
    CommandArgumentsComponent
  },
  props: {
    command: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleActive (thing) {
      if (thing.active) {
        thing.active = false
      } else if (!thing.active) {
        Vue.set(thing, 'active', true)
      }
    },
    hideTooltip (thing) {
      thing.active = false
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/functions';
@import '~@/assets/scss/silent-classes';
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.command {
  position: relative;
  padding: ($baseline-px * .25) 8px ($baseline-px * .5) 8px;
  border-radius: 6px;
  background: $white;
  box-shadow: $card-shadow;
  & ~ .command {
    margin-top: $baseline-rem;
  }
  p {
    margin: 0;
  }
  button {
    display: inline-block;
    border: 1px solid $grey-1000;
    background: $white;
    box-shadow: $button-shadow;
    vertical-align: top;
    &:hover {
      background: $grey-1150;
    }
    &:active {
      background: $grey-1100;
    }
    &.active {
      color: $grey-1200;
      background: $grey-250;
      &:active {
        background: $grey-100;
      }
    }
    .dark-mode & {
      box-shadow: $button-shadow--dark;
    }
  }
  .tooltip {
    right: (-8px);
    left: (-8px);
  }
  .dark-mode & {
    background: $grey-350;
    box-shadow: $card-shadow--dark;
    button {
      border-color: $grey-200;
      background: $grey-350;
      &:hover {
        background: $grey-300;
      }
      &:active {
        background: $grey-250;
      }
      &.active {
        color: $grey-200;
        background: $grey-1200;
        &:active {
          background: $grey-1100;
        }
      }
    }
  }
}
.command__name {
  @extend %code-font-family;
  margin: 0;
  color: $grey-200;
  font-size: $h4-font-rem;
  line-height: ($baseline-px * 2);
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: -0.8px;
  button {
    margin: 4px 0;
    line-height: ($baseline-px * 2) - 12px;
  }
  span:before {
    content: '\002F';// Forward slash
    color: $grey-800;
  }
  .dark-mode & {
    color: $white;
  }
}
.command__desc {
  margin: 2px 0 10px 0;
  padding: 0 4px;
  line-height: $baseline-px;
  color: $grey-250;
  .dark-mode & {
    color: $grey-1200;
  }
}
.command-button {
  border-radius: 20px;
  padding: 1px 14px;
  &:active {
    padding: 2px 14px 0 14px;
  }
  &:after {
    content: '';
    display: inline-block;
    width: ($baseline-px * 2) - 12px;
    height: ($baseline-px * 2) - 12px;
    background: url-encode("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill='#{$grey-800}'><circle cx='200' cy='300' r='30'/><circle cx='325' cy='300' r='30'/><circle cx='450' cy='300' r='30'/></svg>") 50% 50%/100% 100%;
    vertical-align: top;
  }
}

.subcommand-list {
  margin: 12px 0 (-12px) 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
.subcommand {
  position: relative;
  margin: 12px 0 0 0;
  padding: 12px 0;
  border-top: 1px solid $grey-1000;
  & ~ .subcommand {
    margin: 0;
  }
  .tooltip {
    right: (-16px);
    left: (-16px);
  }
  .dark-mode & {
    border-top-color: $grey-200;
  }
}
.subcommand__name {
  @extend %code-font-family;
  line-height: $baseline-px;
  font-weight: 600;
  //white-space: nowrap;
  letter-spacing: -0.3px;
  button {
    line-height: $baseline-px - 4px;
  }
  span {
    color: $grey-800;
    &:before {
      content: '\002F';// Forward slash
    }
  }
}
.subcommand__desc {
  padding: 0 4px;
}

.args-button {
  border-radius: 8px;
  padding: 1px 6px;
  &:active {
    padding: 2px 6px 0 6px;
  }
}

.permissions {
  display: inline-block;
  margin: 4px 0 0 0;
  padding: 4px 8px 0 8px;
  border-top: 1px solid $grey-1100;
  .dark-mode & {
    border-color: $grey-250;
  }
  code ~ code {
    margin-left: 6px;
  }
}
</style>
