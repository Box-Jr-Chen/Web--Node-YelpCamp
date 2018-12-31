

RESTFUL ROUTES

name        url                 verb        desc.
==============================================
INDEX       /campgrounds        GET         Display a list of all campgrounds.
NEW         /campgrounds/new    GET         Display form to make a new campground.
CREATE      /campgrounds        POST        Add new campground to DB
SHOW        /campgrounds/:id    GET         Shows info about one campgrounds

NEW         /campgrounds/:id/comments/new       GET
CREATE      /campgrounds/:id/comments              POST