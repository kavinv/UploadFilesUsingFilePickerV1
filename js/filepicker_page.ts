let filepicker;
class Save {
    url: any;
    apiKey: string;
    whereToSave: string;

    constructor(key: string, urlCons: string, whereToSaveCons: string) {
        this.url = urlCons;
        this.apiKey = key;
        this.whereToSave = whereToSaveCons;

    }

    dataSet() {

        filepicker.setKey(this.apiKey);


        let fileName = this.url.substr((this.url.lastIndexOf('/'))+1);

        filepicker.exportFile(this.url, {
            service: this.whereToSave,
            suggestedFilename: fileName
        }, onSuccess, () => {
            alert("Sorry there was an error, please try later");
        });

        function onSuccess(Blob) {

            console.log(JSON.stringify(Blob));
            alert("The file was saved successfully. This is the temporary file location : " + Blob.url);

        }

    }
}


function savingNow(destinationToSave: any): any {
    let urlData = (<HTMLInputElement> document.getElementById('url')).value;
    let destination = destinationToSave.value;
    let ds = new Save("AP9mmX5AFRgqtKpSzcr8Lz", urlData, destination);
    return ds.dataSet();

}



