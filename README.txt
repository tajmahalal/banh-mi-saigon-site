BANH MI SAIGON WEBSITE
======================
Double-click index.html to open the site in your browser. After you change any file, refresh the page.

FOLDERS
  index.html        The website itself. You should not need to edit this.
  content/          The words and links. Open these in Notepad.
     keys.js        The Google key for live reviews (kept separate on purpose)
     settings.js    Address, phone, hours for each day, Google and Yelp links
     menu.js        Every dish: name, price, ingredients
     story.js       The Our Story page (blank line between paragraphs)
     reviews.js     Google reviews (newest 6 with 4 or 5 stars show)
  themes/           Color palettes and notes on which color goes where (not used by the site itself).
  photos/           The pictures. Name each file after the dish.
     _FILE-NAMES.txt  The exact file name for every dish.

ADDING A DISH PICTURE
  Save the photo in photos/ using the name in _FILE-NAMES.txt, for example
  banh-mi-saigon-heo-nuong.jpg. Refresh the site. It shows on that dish.
  hero.jpg is the Home page picture. family-photo.jpg is the Our Story picture.

LIVE GOOGLE REVIEWS (no weekly upkeep)
  The Reviews tab can load the newest 4 and 5 star Google reviews live, each time someone opens it.
  Nothing is saved (Google's rules do not allow saving reviews). It only works on the real website,
  not when you open index.html from your computer. Steps:
   1. Put the site online (for example GitHub Pages) and note its address.
   2. Google Cloud > APIs and Services > Credentials > your key > Application restrictions > Websites.
      Add your site address, for example https://yourname.github.io/* . Keep the API restriction on
      Places API (New).
   3. Google Cloud > APIs and Services > Places API (New) > Quotas: set a low daily limit (about 30).
      Billing > Budgets and alerts: add a $1 budget alert.
   4. Paste the key into content/keys.js between the quotes (edit it on GitHub, not on your computer).
   5. Upload the changed file. If reviews cannot load (limit reached, offline), the tab shows the
      Google and Yelp buttons instead.
  Leave placesApiKey empty to use the hand-pasted reviews in content/reviews.js instead.
  BETTER (key hidden): put the key in a free Cloudflare Worker (cloudflare-worker.js) and paste the
  Worker address into reviewsProxy in content/settings.js. Then keys.js stays empty.

NOTES
  * The site cannot read Word documents directly (web browsers can't open them).
    Text goes in the .js files in content/. Plain Notepad is fine. If you have a Word
    doc, send it to Claude and ask to have it put into the right content file.
  * Keep the quote marks and commas when you edit a .js file. Only change the words.
  * Sharing this folder with the public needs hosting. Ask Claude to republish
    the latest version as a web page.

COLORS (dark chocolate theme)
  Dark brown #2A1B10: page background
  Orange #FFB15A: top bar and tiles (dark text on them)
  Peach #FFD8A8: headings, buttons, selected tab
  Cream #FFF2DF: body text
  Salmon #F6A57B: dish photo areas
