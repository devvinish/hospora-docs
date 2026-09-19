# Installation

This page is for the person who installs Rounds HMS. Users of the hospital do not need it.

## What is needed

- An **Oracle APEX 26.1** workspace, on Oracle Database (an on-premises database, Oracle Cloud, or an
  Autonomous Database). APEX is free with the database.
- The two application files of Rounds:
    - **Rounds**: the base application. Its supporting objects create the database: the tables, the data
      and the code;
    - **Rounds HMS**: the application the hospital uses. Its supporting objects add what it needs on top of
      the first.

## Steps

1. Sign in to the APEX workspace as a developer.
2. **App Builder > Import**: choose the **Rounds** file and import it. When asked, **install the
   supporting objects**. This creates the Rounds database in the workspace's schema.
3. **App Builder > Import** again: choose the **Rounds HMS** file, and again install its supporting
   objects. The same file upgrades an earlier Rounds HMS: import it over the old one, with the supporting
   objects, and the database is brought up to date.
4. Run **Rounds HMS**. It is in **set-up mode**: the workspace's own accounts can sign in until an
   administrator has a Rounds password.
5. Follow [First-time Setup](setup.md). Start with your own administrator user and password.

!!! note "Upgrades keep the data"
    The supporting objects of Rounds HMS can run again and again: they add what is missing and leave the
    hospital's data alone. Take a backup of the application and the schema before any upgrade all the same.
