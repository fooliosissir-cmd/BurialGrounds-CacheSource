# Burial Grounds Travel Directory cache interface

Status: source interface created on `dev`.

## Interface id

Interface **1324** is the first id after the stock revision-727 interface range.

The authoritative interface index contained archives **0..1323** with no gaps before this work. Therefore 1324 is not an overwritten stock interface: it is the new Burial Grounds Travel Directory archive.

## Source contract

The interface now lives at:

`interfaces/1324/*.json`

and `interfaces/index.json` contains archive 1324 metadata.

The gameval catalog names it:

`bg_travel_directory`

The server's cache-source submodule is advanced to the commit containing this interface.

## Current component contract

- 0 root window
- 20 title
- 21 close
- 22 search field shell
- 23 favorite action
- 24 back
- 25 selected-destination detail text
- 26 teleport action
- 27 teleport label
- 28 empty-state text
- 29 selected category title
- 30 search placeholder text
- 31 favorite label
- 32 back label
- 33 close label
- 40..47 eight category buttons
- 50..57 eight category labels
- 80 scrollable destination-list container
- 100..163 visible destination row operation surfaces
- 200..263 destination row labels
- 300..306 reserved richer detail fields

Approved category order:

1. Bosses
2. Minigames
3. Dungeons
4. Slayer
5. Skilling
6. Cities
7. Wilderness
8. Activities

## Visual direction

The first source version establishes the approved dark Burial Grounds structure using cache-native rectangles and text:

- charcoal/black panels;
- teal/cyan borders, selection and buttons;
- silver/grey primary text;
- muted gold metadata accents;
- recessed list/detail panes.

The approved crystal/forged-stone artwork can be layered into the same component contract as graphics are authored. Server component ids do not need to change for that art pass.

## Runtime behavior already wired

The server now:

- exposes all eight category tabs;
- maps row components to the current category rather than the global catalog index;
- supports more than 64 total destinations as long as one category does not exceed 64 visible rows;
- highlights the selected tab and selected destination;
- shows locked destinations rather than hiding them;
- shows source-backed requirement text and Wilderness danger;
- provides a session-local Favorite toggle;
- uses the native IF_SETSCROLLPOS packet instead of the invalid clientscript 6634;
- keeps the shared companion-control use of the same generic list/detail window compatible.

## Remaining UI work

- add final crystal/forged-stone graphic assets from the approved mockup;
- wire actual text-entry/search filtering;
- decide whether favorites persist across logout;
- populate richer detail fields (type/location/rewards/arrival) only from source-backed data;
- Developer World smoke-test click targets, scrollbar, resize/mobile scale and server operations;
- continue expanding source-backed destinations from the master content audit.
