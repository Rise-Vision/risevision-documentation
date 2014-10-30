---
layout: post
title:  "Save Property"
date:   2014-10-01 10:52:00
category: documentation/player-api
parent-order: 1
order: 3
---

Updates the Display ID and Claim ID in the .ini file. Rise Player will use the saved Display ID and Claim ID the next time the Viewer starts up.

To save the Display ID and Claim ID in the .ini file, send the following GET request to localhost:

`http://localhost:9449/save_property?display_id={displayId}&claim_id={claimId}&restart_viewer={restartViewer}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **display_id**  |  **YES** | Display ID |
| **claim_id**  |  **YES** | Claim ID |
| **restart_viewer**  |  **YES** | If `true`, Player saves Display ID and Claim ID in the .ini file, terminates all running Chrome instances and starts a new instance of the Viewer with the most recent Display ID and Claim ID. |


####Output

None.