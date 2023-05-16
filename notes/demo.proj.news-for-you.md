---
id: w18lpd1lekg1ovf1a9najtj
title: News for You
desc: ""
updated: 1684137572317
created: 1684137572317
---

## News for You

**Please go through the document carefully to understand the requirement along with our expectations.**

#### Scope of work

Goal to integrate RSS Feeds from leading News agencies and feed only relevant News based on user's preference. Most of the News agencies feed News based on certain categories. We need to accumulate news from various News agencies, based on the categories defined by us.

- Sign-in - with one default user
  - Initialize: Initialize the data
    - Category Data: Add few cantegories, euch as Business, Sports, etc
    - Agency Data: Add Times Of India, Hindustan Times and The Hindu.
    - Agency Feed Data: Add feed links that maps to Agency and Category
    - News Data: Remove all News data
  - Fetch News: Fetch and store News reference into local database. RSS Feeds reference:
    - https://timesofindia.indiatimes.com/rss.cms
    - https://www.hindustantimes.com/rss/
    - https://www.thehindu.com/rssfeeds/
  - Reports: Show on the browser (Mandatory), Export to PDF (Optional)
    - News Click Count Report (see Reports section below for more details)
- News (no sign-in required) - will have 2 sections (say left and right panel) on a page, i.e. Category and News
  - Category: User can select one or multiple categories to filter the News feed. User's category selection needs to be preserved at the browser level, ensuring it loads News from only those categories selected during last use.
  - News: Shows News - latest first. List should be auto-refreshed or Notifies users, in case new News added to the database. When user clicks a News, it should register that as click-count, without really thinking of differentiating whether its a same user on the same browser.

> You are welcome to choose to use any free HTML/CSS template.

#### Entities / Attributes

- user
  - user_id
  - name
  - email (use it as user name for sign-in)
  - password
- category
  - category_id
  - category_title
- agency
  - agency_id xyz
  - agency_name toi
  - agency_logo_path /lougg
- agency_feed
  - agency_feed_id 123
  - agency_feed_url
  - agency_id
  - category_id
- news
  - news_id
  - news_title
  - news_description
  - news_publish_date_time
  - news_link (always unique)
  - click_count
  - category_id
  - agency_id

#### Reports

News Click Count Report (selected date of news published)

```
Agency          Ttile                                  # of Click
Time of India   India vs New Zealand: Kyle...          879
...
```

> Feel free to format the reports as you find appropriate.

#### Technologies / Tools

ExpressJS, React / Vue , MySQL or MongoDB

#### Deliverables Expectations

- [x] All features are expected to be working
- [x] Use object oriented approach for the solution with reasonable classes and attributes. Keep it as modular and clean as possible and follow common software practices to include reusability, portability, encapsulation, etc
- [x] Provide code comments and in code documentation where necessary
- [x] Provide sufficient amount of unit tests for implementation (framework of your choice)
- [x] A README describing how to run the program.

Additional notes for candidates taking assignment away from Mindfire office:

- [x] Share github project URL, by pushing both API and UI codes
- [x] Share database schema with sample data as needed.

#### Review Process

Submitted code will be reviewed internally to assess the quality of the implementation / code.
Based on review, we may schedule a follow up meeting to do code/design walk through.
