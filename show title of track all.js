/*Вывести названия трех произвольных треков*/
db.tracks.aggregate([{
    $project: {
        title: 1,
        _id: 0
    }
}])