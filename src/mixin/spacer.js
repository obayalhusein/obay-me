export default {
    data () {
        return {
            padding: String,
        }
    },
    methods: {
        setSpacer(val){
            if(val && val.indexOf('-') + 1){
                // text values
                val = val.toLowerCase().replaceAll(/op|eft|ight|ottom|-/gi, "")
            }
            else if(val) {
                // integer values
                val = `t${val.split(" ")[0]} r${val.split(" ")[1] ? val.split(" ")[1] : val.split(" ")[0]} b${val.split(" ")[2] ? val.split(" ")[2] : val.split(" ")[0]} l${val.split(" ")[3] ? val.split(" ")[3] : val.split(" ")[1] ? val.split(" ")[1] :val.split(" ")[0]}`;
            }
            this.padding = val;
            return this.padding;
        }
    }
}