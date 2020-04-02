module.exports = {
  "title": "Canned Bananas",
  "description": "Kan Tachibana's blog",
  "dest": "docs/.vuepress/dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "Twitter",
            "link": "https://twitter.com/banakankan",
            "icon": "reco-twitter"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/standingflower0607",
            "icon": "reco-github"
          },
          {
            "text": "Facebook",
            "link": "https://www.facebook.com/profile.php?id=100015360343654",
            "icon": "reco-facebook"
          },
          {
            "text": "Portfolio",
            "link": "https://standingflower0607.github.io/",
            "icon": "reco-account"
          }

        ]
      }
    ],

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "smoothScroll": true,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Kan Tachibana",
    "authorAvatar": "/for_insta.jpg",
    "record": "xxxx",
    "startYear": "2020"
  },
  "plugins": {
    'seo': {
    }, 'sitemap': {
      hostname: 'https://kan-tachibana.netlify.com/'
    },
    'feed': {
      canonical_base: 'https://kan-tachibana.netlify.com/'
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}