# Burial Grounds UI Contract

These rules are non-negotiable for all player-facing client work.

## Visual ownership
- Every visible player-facing surface must look intentionally built for Burial Grounds.
- This includes launcher/start flow, login, Settings, lobby, world selection/entry, notices, errors, and other visible menus.
- Reuse the revision-727 frame, border, font, sprite, and layout language where practical. Do not replace working native controls with generic operating-system UI.
- Do not use JOptionPane, default Swing dialogs, stock Android dialogs, placeholder panels, or other default-looking UI for player-facing flows.

## No invented destinations
- Do not add Website, Discord, social, store, support, news, or community buttons unless the feature has been explicitly approved and has a real implemented destination.
- A control shown to the player must do exactly what its label promises. Decorative or dead controls are not acceptable.

## Settings
- Settings is a real, functional Burial Grounds interface, not a placeholder.
- Keep proven native revision-727 controls underneath where useful, but present them through the Burial Grounds visual language.
- Do not gate ordinary display/settings features behind obsolete RuneScape membership or billing logic.

## Login persistence
- Persist the last-used username locally and restore it when the client is reopened.
- Username persistence must survive normal client updates.
- Do not broaden this persistence requirement to other login fields.

## Lobby
- The post-login lobby is part of the Burial Grounds experience and must be custom.
- The post-login lobby has exactly two primary destinations: Home and World Select.
- Do not add Friends, Friends Chat, Clan Chat, Settings, account-management, or social-hub tabs to the lobby. Those systems may remain available elsewhere in the client where they already belong.
- Home and World Select should use a restrained Greyhaven / Burial Grounds lore presentation without renaming basic controls into confusing lore terms.
- Entering a world may use a very short native Greyhaven gate/door transition, but it must not become a long cinematic or require a video asset.
- Do not expose legacy RuneScape membership, billing, Message Centre, email-validation rewards, subscription, free-trial, or advertisement surfaces.
- World selection must remain limited to the configured Burial Grounds Main World and Developer World.

## Failure behavior
- Fail safely without dropping into generic OS dialogs.
- World-switch and client-level notices must use Burial Grounds-owned presentation.
