# Brunt-End

This is a few front-end SASS files that allow a flexible grid system, along with visibility classes and breakpoints (plus mixins for media queries)

### Mixins
With the mixins, you can use the grid-column() mixin to get the width of the item, along with the breakpoint() mixin this gives you full control to add grid functionality to your own classes.

```
.my-awesome-thing {
    @include breakpoint('small') {
        @include grid-column(1, 5); // inside this MQ it's equivalent to .small-1-of-5
    }
    @include breakpoint('medium') {
        @include grid-column(2, 12);
    }
    @include breakpoint('large') {
        @include grid-column(2, 12, false); // doesn't add the grid-gutters
    }
}
```
