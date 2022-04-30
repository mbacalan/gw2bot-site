<template>
  <div class="faq">
    <h1>Frequently Asked Questions</h1>
    <p>
      Typef<code>$help</code> for list of all commands.
    </p>

    <p>
      Server admins can change the prefix to something else using
      <code>$prefix</code>.
    </p>

    <div class="wrapper">
      <div class="list-group">
        <li class="list-group-item">
          <h3 class="titles">
            How do I use the bot?
          </h3>

          <p>
            After the bot has been added to the server using
            <a href="https://discordapp.com/oauth2/authorize?client_id=310050883100737536&scope=bot&permissions=939879488">this link</a>,
            you can access the commands using $ prefix.
          </p>
        </li>

        <li class="list-group-item">
          <h3 class="titles">
            Does the bot work in DMs?
          </h3>

          <p>Yes. API keys are cross-server too, if you're in multiple servers with the bot.</p>
        </li>

        <li class="list-group-item">
          <h3 class="titles">
            How do I setup game update notifications?
          </h3>

          <p>
            First, you must have the "manage server" permission.
            Provided you have that, first point the bot to the channel where
            it'll post announcements, using
            <code>$updatenotifier channel</code>.
            After that, enable it using
            <code>$updatenotifier toggle on</code>. Make
            sure the bot has permissions to talk in that channel.
          </p>
        </li>

        <li class="list-group-item">
          <h3 class="titles">
            What is guildsync?
          </h3>

          <p>
            guildsync is a feature which allows you to sync your in game ranks with discord roles.
            Here is some key information about how it works;
          </p>

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
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import '../assets/config';

.faq {
  margin: auto;
  text-align: center;

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  p,
  ul {
    line-height: 1.4;
    padding-left: 5%;
    padding-right: 5%;
  }

  .wrapper p {
    text-align: left;
  }

  a {
    color: $tertiaryColor;
  }

  ul {
    list-style: decimal;
    line-height: 1.8em;
    text-align: left;
  }

  code {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 1.5rem;
    padding: 2px;
    color:#000;
    background: rgba(lighten($tertiaryColor, 5), 0.5);
    border-radius: 3px;
  }
}
</style>

<script>
export default {
  name: 'FaqPage'
}
</script>
