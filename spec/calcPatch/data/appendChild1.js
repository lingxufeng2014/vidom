module.exports = {
    "name" : "appendChild1",
    "trees" : [
        {
            "tag" : "div",
            "children" : [
                {
                    "tag" : "div"
                }
            ]
        },
        {
            "tag" : "div",
            "children" : [
                {
                    "tag" : "div"
                },
                {
                    "tag" : "div"
                },
                {
                    "tag" : "span"
                }
            ]
        }
    ],
    "patch" : [
        {
            "type" : 5,
            "path" : "",
            "childNode" : {
                "tag" : "div"
            }
        },
        {
            "type" : 5,
            "path" : "",
            "childNode" : {
                "tag" : "span"
            }
        }
    ]
};