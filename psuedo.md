# Psuedo

- Homepage Container
  
## MVP

- ChallengeCard
  - Render challenges with prop data
  - Create organize data so it can programmatically render the activities page
    - Maybe .map() in home and activities to render an array of categories and weeks ["Expunge", "Gambit", "Gear"] && ["Week One", "Week Two"]
    - Then ChallengeCategory .maps() all challenge data: if(data.week2.category === props.ChallengeCategory), so it would read ("gambit" === "gambit") and render it with category card

## Polish

- Challenge Category Component
  - Create collapsible menu for each week
  