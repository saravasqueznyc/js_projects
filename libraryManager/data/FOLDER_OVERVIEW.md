# Folder Overview: data

## What this folder is about
- Stores persisted data files used by the app (for example, books JSON).

## Why it is organized this way
- Separating data from code keeps storage concerns simple and swappable.

## How to work here
- Keep each file focused on one responsibility.
- Prefer small, composable modules over monolithic files.
- Add/update tests or validation notes when behavior changes.
