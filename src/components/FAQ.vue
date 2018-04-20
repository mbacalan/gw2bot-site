<template>
  <div id="faq">
    <hr>
    <h1>Frequently Asked Questions</h1>
    <hr>
    <h2>How do I use the bot?</h2>
      <p>After the bot has been added to the server using <a :href="inviteLink">this link</a>,
        you can access the commands using $ prefix.</p>
        <p>Type <code>$help</code> for list of all commands.</p>
        <p>Server admins can change the prefix to something else using <code>$prefix</code>.</p>
    <h2>Does the bot work in DMs?</h2>
      <p>Yes. API keys are cross-server too, if you're in multiple servers with the bot.</p>
    <h2>How do I setup game update notifications?</h2>
      <p>First, you must have the "manage server" permission.</p>
      <p>Provided you have that, first point the bot to the channel where
        it'll post announcements, using <code>$updatenotifier channel</code>.</p>
      <p>After that, enable it using <code>$updatenotifier toggle on</code>. Make
        sure the bot has permissions to talk in that channel.</p>
    <h2>What is guildsync?</h2>
      <p>guildsync is a feature which allows you to sync your in game ranks with discord roles.</p>
      <ul>
        <li>It requires leader permissions in game.</li>
        <li>It is tied to your account. If you remove your API key, it will break.</li>
        <li>It isn't instant - it can take even 30 minutes before your settings are synced. To force a sync, you can use <code>$guildsync now</code>.</li>
        <li>Always ensure that GW2Bot is above the synced roles, or the bot won't be able to assign them.</li>
        <li>You can modify and change permissions of the roles created by the bot.</li>
        <li>Only server members with API key added to the bot will participate in the sync and no input is required from them.</li>
        <li>New members who add their API key after sync is setup will also be synced automatically.</li>
      </ul>
  </div>
</template>

<script scoped>
export default {
  props: ["inviteLink"]
};
</script>

