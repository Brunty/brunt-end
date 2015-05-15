# Brunt-End

This is a few front-end SASS files that allow a flexible grid system, along with mixins to access specified breakpoints.

**NOTE: Currently it's all a bit experimental and hasn't been fully tested.**

## The Grid

The grid is... whatever you want it to be. You have 2 main things to focus on for the grid really. The number of columns in your grid (you can have multiple grids of differing column counts) and the breakpoints for the grid.

In `_settings.scss` you'll find two maps (You can override these - these are just the default):
```SCSS
$grid-column-sets: (
        5,
        12
) !default;
```

This means we'll have 2 grids running, one of 5 columns, one of 12.

You'll also find:

```SCSS
$breakpoints: (
        small: "only screen",
        s-medium: "only screen and (min-width: 481px)",
        medium: "only screen and (min-width: 641px)",
        l-medium: "only screen and (min-width: 801px)",
        large: "only screen and (min-width: 1025px)",
        x-large: "only screen and (min-width: 1281px)",
        xx-large: "only screen and (min-width: 1441px)",
        xxx-large: "only screen and (min-width: 1921px)",
) !default;
```

These are the breakpoints for our grid, the key to the map is the name that's used throughout the system in classes.
 
The class names are structured as follows:

`.{$breakpoint}-{$colspan}-of-{$totalcols}`

### Some examples:
* For a 6 column wide div in a 12 column grid in our l-medium breakpoint we'd use: `.l-medium-6-of-12`
* For a 3 column wide div in a 5 column grid in our small breakpoint we'd use: `.small-3-of-5`

If you add different column counts, or breakpoints with new names, you can reference the classes accordingly in your HTML.

### Mixins
With the mixins, you can use the grid-column() mixin to get the width of the item, along with the breakpoint() mixin this gives you full control to add grid functionality to your own classes.

```SCSS
.my-awesome-thing {
    @include breakpoint('small') {
        @include grid-column($colspan: 1, $totalcols: 5); // inside this MQ it's equivalent to .small-1-of-5
    }
    @include breakpoint('medium') {
        @include grid-column($colspan: 2, $totalcols: 12);
    }
    @include breakpoint('large') {
        @include grid-column($colspan: 2, $totalcols: 12, $gutters: false); // doesn't add the grid-gutters
    }
}
```