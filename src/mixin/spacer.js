export default {
    data () {
        return {
            spacingClasses: '',
            devices: ['', 'Xs', 'Sm', 'Md', 'Lg', 'Xl'],
            gapTypes: [
                {
                    name: "padding",
                    type: "p"
                },
                {
                    name: "margin",
                    type: "m"
                },
                {
                    name: "innerSpace",
                    type: "p"
                },
                {
                    name: "outerSpace",
                    type: "m"
                },
            ],
        }
    },
    props: {
        // Padding
        innerSpace: String,
        innerSpaceSm: String,
        innerSpaceMd: String,
        innerSpaceLg: String,
        innerSpaceXl: String,
        padding: String,
        paddingSm: String,
        paddingMd: String,
        paddingLg: String,
        paddingXl: String,
        // Margin
        outerSpace: String,
        outerSpaceSm: String,
        outerSpaceMd: String,
        outerSpaceLg: String,
        outerSpaceXl: String,
        margin: String,
        marginSm: String,
        marginMd: String,
        marginLg: String,
        marginXl: String,
    },
    computed: {
        setSpacerClass(){
            this.spacingClasses = "";
            // Loop throgh props
            this.devices.forEach(size => {
                this.gapTypes.forEach(gap => {
                    // Set spacing classes
                    if(this[`${gap.name}${size}`])
                        this.spacingClasses += this.setSpacer(this._props[`${gap.name}${size}`], size.toLowerCase(), gap.type);
                });
            });
            return this.spacingClasses;
        },
    },
    methods: {
        setSpacer(prop, size, type){
            if(prop && prop.indexOf('-') + 1){
                // text values
                prop = prop.toLowerCase().replaceAll(/op|eft|ight|ottom|-/gi, "")
            }
            else if(prop) {
                // integer values
                prop = `${type}t${size}${prop.split(" ")[0]} ${type}r${size}${prop.split(" ")[1] ? prop.split(" ")[1] : prop.split(" ")[0]} ${type}b${size}${prop.split(" ")[2] ? prop.split(" ")[2] : prop.split(" ")[0]} ${type}l${size}${prop.split(" ")[3] ? prop.split(" ")[3] : prop.split(" ")[1] ? prop.split(" ")[1] :prop.split(" ")[0]} `;
            }
            return prop;
        }
    }
}