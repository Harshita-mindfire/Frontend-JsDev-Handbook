
- a JS script that gets registered with the browser.
- stays registered even when offline
- can load content even with no connection.
- service workers are event driven: **install** event, **activate** event, **fetch** event etc.

Uses cases

- background data sync/preload: lets you defer actions until user has stable connectivity. Also allows services to push periodic updates to the app so that it can update when it is next online.

eg=> when you hit like on instagram, and the connection is not stable, the event gets synced when we are back with stable connection.

![Service worker lifecycle](/assets/images/2023-08-16-16-44-43.png)

## Registration

![](/assets/images/2023-08-16-17-18-27.png)

Once registered you will find it activated in your application tab of Chrome dev tools.
![](/assets/images/2023-08-16-17-19-17.png)

