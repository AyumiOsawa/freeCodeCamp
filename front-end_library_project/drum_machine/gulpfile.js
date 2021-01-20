const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

gulp.task("sass", async function(){
  const expanded = await gulp.src("./src/sass/**/*.sass")
                          .pipe(sass({outputStyle: "expanded"}))
  expanded.pipe(gulp.dest("./public"));
});

gulp.task("babel", function(){
  gulp.src("./src/js/**/*.js")
  .pipe(babel())
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest("./public"));
});
