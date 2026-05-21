# Token Rush — Changelog

## v0.3.7
- CPU turns faster: afterAction 800ms, nextTurn 400ms, doCpuTurn 300ms, launchGame 700ms, cpuPassStart 200ms
- Replaced 2 forfeit squares (19, 55) with steal squares → 8 steal squares total
- Added 2 new token squares (token1 at sq 35, token2 at sq 48) → 30 total board tokens
- Redistribute now works inline on board: no dialog, instruction shown in action strip, Done button in action strip; auto-closes when budget exhausted or no sources remain

## v0.3.6
- Removed Next button; CPU turns auto-advance after a short pause
- Tokens remaining circle now always visible (desktop and mobile)
- Forfeit: player selects square directly on the board (highlighted squares, no dialog)

## v0.3.5
- Fixed missing corner square at bottom-right (sqPos bug)
- Start square changed to green
- Tokens remaining moved to centre of board
- CPU turns play automatically without waiting for human input
- Graphical improvements to board and player tokens

## v0.3
- Game is fully responsive; fills screen height and width with no scrolling required
- Board constrained by both available width and height
- Added version number display

## v0.2
- Initial playable version with 4 players (1 human, 3 CPU)
- Board layout: 62 squares, token/steal/forfeit/start squares
- Game modes: Quick, Medium, Long
- Pass-Start bonus mechanic
- Steal and forfeit dialogs
- Redistribute mechanic
