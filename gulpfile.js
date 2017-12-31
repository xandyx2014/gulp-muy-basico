const gulp = require('gulp');
/**
 * gulp task ->
 * gulp src  ->de donde va agarra la carpetas
 * gulp dest ->donde va a dejar los archivos ya una ves procesados
 * gulp watch->
 */

    gulp.task('myTask',()=>
    gulp.src('./origen')
    .pipe(plugins1)
    .pipe(plugin3)
    .pipe(plugins3)
    .pipe(gulp.dest('./origen'))

    );
    /**supervisa ese directorio y ejecuta esa tarea */
    gulp.watch('./origen',['myTask']);





    gulp.task('default',()=>
        {
            gulp.watch('./origen',['myTask']);
            gulp.watch()
        });