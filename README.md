# Church Finance Management System

A simple offline-capable web app for counting and recording church finances. It works on phones and computers and needs no server or account.

**Live:** ccccfinance.netlify.app

## Features

- Cash count by denomination (₱1 to ₱1000) with automatic totals
- Online money entry (GCash, bank transfer, etc.)
- Automatic computation of TOT, Love Gift and Fuel Fix for the pastors
- Extra allocations for the pastors (for example a birthday gift)
- Extra church expenses, with a warning when Remaining goes negative
- Records list with view, edit, copy, delete, and date filter
- Monthly summary and print-friendly report
- Export to CSV, plus JSON backup and restore
- Works offline and can be installed on a phone's home screen

## Install on your phone

- **Android (Chrome):** open the link, then menu → *Add to Home screen*.
- **iPhone (Safari):** open the link, then Share → *Add to Home Screen*.

## Data and privacy

All records are saved in the browser on your own device (IndexedDB). Nothing is uploaded to any server, and the data is not stored in this repository.

Because of this:
- Each device has its own separate records.
- Clearing the browser data will delete the records.
- **Back up regularly** with *Settings → Export JSON backup*. Use *Restore JSON backup* to move records to another device.

## Run locally

No build step is needed. Download or clone the repo and open `index.html` in a browser. For offline/install features, serve it with any static server or use GitHub Pages.

