# Unlearning AngularJS?

The history of AngularJS and its community is one of rapid change. AngularJS started
out as little more than an exploratory side project and has climbed to the
number one SPA framework in a few short years. This rapid pace has created a
revolving door of common usage patterns. As a result it can be difficult to
understand which of these patterns are still available, deprecated or just plain
bad.

The theme among all of these patterns is their convergence on a component
heirarchy approach to application development. This class is centered around
this approach and the best practices for its implementation. There are several
topics in AngularJS that do not fit into this category.

While we can certainly talk about these topics at length it is not our intention
to spend a large amount of time in these areas.

This list includes: $scope nested scopes ng-controller (with demonstrative
exceptions) $scope.$watch $resource scope events as a data bus ng-include
factories directives as components**

For those with a basic understanding of AngularJS some of these topics may come as
a surprise. Over the next three days we will demonstrate how to build a
scalable, maintainable application without the use of the features listed above.
