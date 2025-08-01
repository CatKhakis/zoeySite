AUTHOR = 'zoey'
SITENAME = 'zoeySite'
SITEURL = ""

THEME = 'theme'

PATH = "content"
ARTICLE_PATHS = ['blog']
ARTICLE_SAVE_AS = '{date:%Y}/{slug}.html'
ARTICLE_URL = '{date:%Y}/{slug}.html'

TIMEZONE = 'America/Chicago'

DEFAULT_LANG = 'en'

from lucide.jinja import lucide
JINJA_GLOBALS = {"lucide": lucide}

WEBASSETS_CONFIG = [
    ("CLOSURE_COMPRESSOR_PATH", "lib/closure/closure.jar"),
    ("closure_compressor_optimization", "WHITESPACE_ONLY")
]

WEBASSETS_BUNDLES = (
    # ("maincss", ("css/main.css", "css/layout.css", "css/fonts.css", "css/zoeySite.css"),
    # {"output": "css/style.min.css", "filters": ["cssmin"]}),

    # ("reset", ("css/reset.css"),
    # {"output": "reset.css", "filters": ["cssmin"]}),

    ("colors", ("css/colors.css", "css/catppuccin.css"),
    {"output": "css/colors.min.css", "filters": ["cssmin"]}),
)

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True