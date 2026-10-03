/* SETTINGS: contact info and links. Edit the text between the quotes, save, refresh the page. */
window.SITE_SETTINGS = {
  address: "198 Grand St, New York, NY 10013",
  phone: "(212) 941-1541",
  hours: "Tue to Sun 10am to 5:30pm. Closed Monday.",


  // Hours for the Order page. One line per day: ["Day", "hours"]. Write "Closed" for a closed day.
  hoursByDay: [
    ["Monday", "Closed"],
    ["Tuesday", "10:00 am to 5:30 pm"],
    ["Wednesday", "10:00 am to 5:30 pm"],
    ["Thursday", "10:00 am to 5:30 pm"],
    ["Friday", "10:00 am to 5:30 pm"],
    ["Saturday", "10:00 am to 5:30 pm"],
    ["Sunday", "10:00 am to 5:30 pm"]
  ],

  // Live Google reviews (nothing is saved, they load each time someone opens the Reviews tab).
  // The Google key lives in its own file, content/keys.js. If it is empty, the hand-pasted reviews in reviews.js are used.
  // Address of your Cloudflare Worker (it holds the Google key so the key is never on the website).
  // Example: "https://banh-mi-reviews.YOURNAME.workers.dev". Leave empty until the Worker is set up.
  reviewsProxy: "https://banh-mi-reviews.tj204268122.workers.dev",
  placeId: "ChIJLZ_KRIhZwokRUanDSCyp1x4",

  yelp: "https://www.yelp.com/biz/banh-mi-saigon-new-york",
  googleReviews: "https://search.google.com/local/reviews?placeid=ChIJLZ_KRIhZwokRUanDSCyp1x4"
};
