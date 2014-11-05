---
layout: post
title:  "Set Property"
date:   2014-10-01 10:52:00
category: developer/player-api/player
parent-order: 1
order: 4
---

Sends Player commands such as restart, reboot, and upgrade, as well as data associated with each command.

To send commands to the Player, send the following GET request to localhost:

`http://localhost:9449/set_property?update_required={updateRequired}&restart_required={restartRequired}&reboot_required={rebootRequired}&reboot_time={rebootTime}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **update_required**  |  **NO**  | If `true`, the Player is stopped, software updates are installed and then the Player is restarted. |
| **restart_required**  |  **NO**  | If `true`, the Player is restarted. |
| **reboot_required**  |  **NO** | If `true`, the computer is rebooted. |
| **reboot_time**  |  **NO** | Time at which the computer is to be rebooted, in 24 hour format (HH:mm).. |


####Output

None.