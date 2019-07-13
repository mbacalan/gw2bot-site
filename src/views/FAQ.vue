<template>
  <div id="faq">
    <hr />
    <h1>Frequently Asked Questions</h1>
    <hr />
    <p>
      Type
      <code>$help</code> for list of all commands.
    </p>
    <p>
      Server admins can change the prefix to something else using
      <code>$prefix</code>.
    </p>
    <div class="wrapper">
      <div class="col-1">
        <div class="list-group">
          <li class="list-group-item border">
            <h3>How do I use the bot?</h3>
            <small>
              After the bot has been added to the server using
              <a :href="inviteLink">this link</a>,
              you can access the commands using $ prefix.
            </small>
          </li>
          <li class="list-group-item border">
            <h3>Does the bot work in DMs?</h3>
            <small>Yes. API keys are cross-server too, if you're in multiple servers with the bot.</small>
          </li>
          <li class="list-group-item border">
            <h3>How do I setup game update notifications?</h3>
            <small>
              First, you must have the "manage server" permission.
              Provided you have that, first point the bot to the channel where
              it'll post announcements, using
              <code>$updatenotifier channel</code>.
              After that, enable it using
              <code>$updatenotifier toggle on</code>. Make
              sure the bot has permissions to talk in that channel.
            </small>
          </li>
        </div>
      </div>

      <div class="col-2">
        <div class="list-group">
          <li class="list-group-item border">
            <h3>What is guildsync?</h3>
            <small>guildsync is a feature which allows you to sync your in game ranks with discord roles.
              <ul>
                <li>It requires leader permissions in game.</li>
                <li>It is tied to your account. If you remove your API key, it will break.</li>
                <li>
                  It isn't instant - it can take even 30 minutes before your settings are synced. To force a sync, you can use
                  <code>$guildsync now</code>.
                </li>
                <li>Always ensure that GW2Bot is above the synced roles, or the bot won't be able to assign them.</li>
                <li>You can modify and change permissions of the roles created by the bot.</li>
                <li>Only server members with API key added to the bot will participate in the sync and no input is required from them.</li>
                <li>New members who add their API key after sync is setup will also be synced automatically.</li>
              </ul>
            </small>
          </li>
        </div>
      </div>

    </div>
  </div>
</template>

<script scoped>
export default {
  props: ["inviteLink"]
};
</script>
