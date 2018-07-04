YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "jsDataQuery",
        "sqlFun"
    ],
    "modules": [
        "jsDataQuery"
    ],
    "allModules": [
        {
            "displayName": "jsDataQuery",
            "name": "jsDataQuery",
            "description": "Provides utility functions to filter data and to create sql condition over database.\nEvery function returns a function f where:\nf ( r, context )  = true if r matches condition in the given context\nf( r, context ) = result  evaluated in the given context if f is a computation function\nf.isTrue = true if f is always true\nf.isFalse = true if f is always false\nf ( r, context) = undefined if there is no sufficient data to evaluate f\nnull fields and undefined fields are all considered (and returned) as null values (so they compare equal)\nf.toSql(formatter, context)  = a string representing the underlying condition to be applied to a database.\n formatter is used to obtain details about making the expression, see sqlFormatter for an example\n [context] is the context into which the expression have to be evaluated"
        }
    ],
    "elements": []
} };
});