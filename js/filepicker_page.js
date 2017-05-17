var filepicker;
var Save = (function () {
    function Save(key, urlCons) {
        this.url = urlCons;
        this.apiKey = key;
    }
    Save.prototype.dataSet = function () {
        filepicker.setKey(this.apiKey);
        filepicker.exportFile(this.url, { suggestedFileName: 'newFile5' }, Blob, function () {
            alert("Sorry there was an error, please try later");
        });
        function Blob() {
            alert("Your file was saved successfully!");
        }
    };
    return Save;
}());
function savingNow() {
    var a2 = document.getElementById('url').value;
    var a1 = new Save("AP9mmX5AFRgqtKpSzcr8Lz", a2);
    return a1.dataSet();
}
