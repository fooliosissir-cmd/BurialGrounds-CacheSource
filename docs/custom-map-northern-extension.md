# Northern Custom Mode extension buffer

The first northern expansion row is source y=206.

- `74_206` is the converted Snowy Area V1 map.
- `72_206`, `73_206`, and `75_206..79_206` are deliberately blocked water buffer regions.
- The buffers allow the Adventure instance to grow from 48 to 56 chunks high without exposing unrelated or unfinished terrain.
- Only the interior of `74_206` is intended to be player-accessible until further northern regions are deliberately adopted.
- Entry into the snowy region is handled as a controlled mountain-pass transition; the released map's south edge is water, so it is not forced into a fake seamless road connection.
