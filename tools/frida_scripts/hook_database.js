// hook_database.js - Example Frida hook to log SQL queries
Java.perform(function() {
    try {
        var SQLiteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");
        SQLiteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(sql, args) {
            console.log("[*] rawQuery called: " + sql);
            return this.rawQuery(sql, args);
        };
    } catch (e) { console.log(e); }
});
