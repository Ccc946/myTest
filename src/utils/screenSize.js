module.exports = {
    MonitorWindowChanges() {
        var widthScreen = document.documentElement.clientWidth || document.body.clientWidth;
        if(widthScreen > 900 ) {
            return 'pc-view';
        } else {
            return 'moblie-view';
        }
    }
}