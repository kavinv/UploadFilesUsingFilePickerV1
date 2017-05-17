var filepicker;
var Save = (function () {
    function Save(key, urlCons, whereToSaveCons) {
        this.url = urlCons;
        this.apiKey = key;
        this.whereToSave = whereToSaveCons;
    }
    Save.prototype.dataSet = function () {
        filepicker.setKey(this.apiKey);
        var fileName = this.url.substr((this.url.lastIndexOf('/')) + 1);
        filepicker.exportFile(this.url, {
            service: this.whereToSave,
            suggestedFilename: fileName
        }, onSuccess, function () {
            alert("Sorry there was an error, please try later");
        });
        function onSuccess(Blob) {
            console.log(JSON.stringify(Blob));
            alert("The file was saved successfully. This is the temporary file location : " + Blob.url);
        }
    };
    return Save;
}());
function savingNow(destinationToSave) {
    var urlData = document.getElementById('url').value;
    var destination = destinationToSave.value;
    var ds = new Save("AP9mmX5AFRgqtKpSzcr8Lz", urlData, destination);
    return ds.dataSet();
}
