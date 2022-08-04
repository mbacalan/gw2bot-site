<template>
  <ul class="arg-list">
    <li v-for="(arg, index) in command.args" :key="`arg-${index}`" class="arg">
      <p class="arg__name">
        {{ arg.name }} <span>{{ '('+(arg.required?'required':'optional')+')' }}</span>
      </p>
      <p class="arg__desc small-text">
        {{ arg.desc | twoOrphans }}{{ arg.options?':':'.' }}
      </p>
      <ul v-if="arg.options" class="option-list">
        <li v-for="(option, index2) in arg.options" :key="`option-${index2}`" class="option small-text">
          {{ option | twoOrphans }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommandArgumentsComponent',
  props: {
    command: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/functions';
@import '~@/assets/scss/silent-classes';
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.arg-list {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
.arg {
  margin: 0;
  padding: 12px 0;
  & ~ .arg {
    border-top: 1px solid $grey-1000;
  }
  .dark-mode & {
    border-top-color: $grey-200;
  }
}
.arg__name {
  @extend %code-font-family;
  line-height: $baseline-px;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: -0.3px;
  span {
    color: $grey-800;
    font-weight: 400;
  }
}
.arg__desc {
  padding: 0 4px;
}

.option-list {
  display: inline-block;
  padding: 0;
  margin: 6px 8px 0 8px;
  border: 1px solid $grey-1000;
  border-radius: 8px;
  list-style: none;
  .dark-mode & {
    border-color: $grey-200;
  }
}
.option {
  position: relative;
  margin: 0;
  padding: 6px 12px 6px 20px;
  &:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 14px;
    border: 2px solid currentColor;
    border-radius: 50%;
  }
  & ~ .option {
    border-top: 1px solid $grey-1000;
  }
  .dark-mode & {
    border-top-color: $grey-200;
  }
}
</style>
