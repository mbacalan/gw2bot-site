<template>
  <main>
    <div class="page-width page-padding">
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>

      <div class="question">
        <h2 class="h3">
          How do I use the bot?
        </h2>
        <p>After the bot has been added to the server using <a class="external" :href="$inviteLink">this invite link</a>, you can access the commands by using the <code>/</code> prefix.</p>
        <p><strong>Type <code>/</code> for a full list of commands.</strong></p>
      </div>

      <div class="question">
        <h2 class="h3">
          How do I link my Guild Wars 2 account to&nbsp;GW2Bot?
        </h2>
        <p>Follow the text instructions below or <a class="external" href="https://www.youtube.com/watch?v=OHyP0xQmgjw" target="_blank">watch this video guide</a>.</p>
        <ol>
          <li>Login to ArenaNet's website at <a class="external" href="https://account.arena.net/" target="_blank">https://account.arena.net/</a> with your Guild Wars 2 username and password, then go to the Applications tab and click the "New Key" button.</li>
          <li>Input a name for the new API key and select the permissions you wish to grant GW2Bot, then click "Create API Key". <em>Note: some commands will not work unless you select the appropriate permissions.</em></li>
          <li>Copy the new API key, then send a direct message on Discord to <code>GW2Bot#2251</code> with the following command to add a new API key: <code>/key&nbsp;add&nbsp;(your&nbsp;API&nbsp;key)</code></li>
        </ol>
      </div>

      <div class="question">
        <h2 class="h3">
          Does the bot work in DMs?
        </h2>
        <p>Yes. API keys are cross-server too, if you're in multiple servers with the bot.</p>
      </div>

      <div class="question">
        <h2 class="h3">
          How do I setup game update notifications?
        </h2>
        <p>First, make sure you have the "Manage Server" permission in the applicable Discord server.</p>
        <p>Provided you have that, point the bot to the channel where it'll post announcements, using <code>/notifier&nbsp;update&nbsp;channel</code>.</p>
        <p>Make sure the bot has permissions to talk in that channel.</p>
      </div>

      <div class="question">
        <h2 class="h3">
          What is guildsync?
        </h2>
        <p>guildsync is a feature which allows you to sync your in-game guild ranks with Discord roles.</p>
        <ul>
          <li>It requires leader permissions in-game.</li>
          <li>It is tied to your Guild Wars 2 account; if you remove your API key, guildsync will break.</li>
          <li>Syncing isn't instant - it can sometimes take up to 30 minutes before your settings are synced. To force a sync, you can use command <code>/server&nbsp;sync_now</code>.</li>
          <li>Always ensure that GW2Bot is above the synced roles, or else the bot won't be able to assign them.</li>
          <li>You can modify and change permissions of the roles created by the bot.</li>
          <li>Only server members with an API key added to the bot will participate in the sync and no input is required from them.</li>
          <li>New members who add their API key after sync is setup will also be synced automatically.</li>
        </ul>
      </div>

      <div class="question">
        <h2 class="h3">
          Why are the emojis not displaying correctly in my Discord&nbsp;server?
        </h2>
        <p>You must grant the permission "Use External Emojis" to the <code>@everyone</code> role within your Discord server.</p>
      </div>

      <div class="question">
        <h2 class="h3">
          The bot is not working! What should I&nbsp;do?
        </h2>
        <p>For further help and guidance with GW2Bot, please <a class="external" :href="$supportServerLink" target="_blank">join the support server</a>!</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'FaqPage'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.question {
  margin: $baseline-rem 0 0 0;
  padding: $baseline-rem ($gutter-px * .5) $baseline-rem ($gutter-px * .5);
  border-radius: 6px;
  background: $white;
  box-shadow: $card-shadow;
  h2 {
    margin: 0;
  }
  .dark-mode & {
    background: $grey-350;
    box-shadow: $card-shadow--dark;
  }
}
</style>
