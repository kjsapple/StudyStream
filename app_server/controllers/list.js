/* Home page */
module.exports.homelist = function(req,res){
    res.render('course-list', {title : "Home"});
};

/* course page */
module.exports.courseInfo = function(req,res){
    res.render('course-info', {title : "Course Information"});
};

module.exports.courseInfo1 = function(req,res){
    res.render('course-info1', {title : "Course Information"});
};

module.exports.catalogue= function(req,res){
    res.render('course-catalogue', {title : "Course Catalogue"});
};

module.exports.courseInfo2= function(req,res){
    res.render('course-info2', {title : "Course Catalogue"});
};


module.exports.courseInfo3= function(req,res){
    res.render('course-info3', {title : "Course Catalogue"});
};

module.exports.courseInfo4= function(req,res){
    res.render('course-info4', {title : "Course Catalogue"});
};

/* Query page */
module.exports.addQuery = function(req,res){
    res.render('course-queries-form', {title : "Add Query"});
};

