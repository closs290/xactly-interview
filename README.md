# xactly-interview
Technical interview for Xactly, May 2022


Problem description:

We need to create a reusable component that displays an organizational hierarchy to be displayed on a dashboard. A sample organization hierarchy with the required details is described at the end of the problem description below.

Each node in the hierarchy is associated with an attribute that describes their status as being ‘critical’, ‘warning’ or ‘normal’. The status describes the node's sales performance for the quarter.

We want to display the status with the colors red for critical, yellow for warning and green for normal.

We want to display this hierarchy and their state on a large TV in the office of the Sales VP. The constraint is that since this is on a TV we cannot interact with the UI.

The display is refreshed every 30 minutes to show the latest status of the hierarchy.

The VP of sales wants to see the entire hierarchy on the TV along with the status of the nodes so that she can with a quick glance get an idea of how her organization is doing. If some areas are critical (red) then she can drill down into the problem areas on her laptop.

Sample hierarchy:
![image](https://user-images.githubusercontent.com/59987065/168410559-bc289dde-ef07-4b94-91c1-887860382911.png)

  VP of Sales [critical]

    Sales Manager (North America) [critical]

      Sales Lead (Canada) [normal]

        Sales Representative (Toronto) [normal]

        Sales Representative (Vancouver) [normal]

      Sales Lead (USA) [critical]

        Sales Representative (New York) [warning]

        Sales Representative (Dallas) [critical]

        Sales Representative (Los Angeles) [critical]

    Sales Manager (Europe) [warning]

      Sales Lead (Germany) [warning]

        Sales Representative (Berlin) [normal]

        Sales Representative (Frankfurt) [critical]

      Sales Lead (Italy) [normal]

        Sales Representative (Milan) [normal]


Extra points for thinking about two scenarios where 1) The hierarchy is management heavy and there are a lot of managers and leads and not many sales reps and 2) The hierarchy is management lean where only a few managers and leads manage a large number of sales representatives.
