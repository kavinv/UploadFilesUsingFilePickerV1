let filepicker;
class Save {
    url: any;
    apiKey: string;


    constructor(key: string, urlCons: string) {
        this.url = urlCons;
        this.apiKey = key;

    }

    dataSet() {

        filepicker.setKey(this.apiKey);
        filepicker.exportFile(this.url, {suggestedFileName: 'newFile5'}, Blob, () => {
            alert("Sorry there was an error, please try later")
        });
        function Blob() {
            alert("Your file was saved successfully!")
        }

    }
}


function savingNow() {
    let a2 = (<HTMLInputElement> document.getElementById('url')).value;
    let a1 = new Save("AP9mmX5AFRgqtKpSzcr8Lz", a2);
    return a1.dataSet();


}



